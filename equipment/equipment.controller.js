const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const equipmentService = require('./equipment.service');
const jwt_decode = require('jwt-decode');

router.post('/InsertSingleEquipments' , equipmentSchema,insertEquipment);

function equipmentSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string(),
        power: Joi.string(),
        price: Joi.string(),
        image:Joi.string(),
        userId:Joi.string()
    });
    validateRequest(req, next, schema);
}

module.exports = router;

function insertEquipment(req, res, next) {
   var params = req.body;
   var decode = jwt_decode(req.headers.authorization);
   console.log('req.headers' , req.headers);
   console.log('decode',decode);
//    res.json({ message: 'Equipment inserted successfully' });
    params.userId = decode.id;
    equipmentService.insertEquipment(params, req.get('origin'))
        .then(() => res.json({ message: 'Equipment inserted successfully' }))
        .catch(next);
}