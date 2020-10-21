const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const equipmentService = require('./equipment.service');


router.post('/InsertSingleEquipments' , insertEquipment);

function equipmentSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string(),
        power: Joi.number(),
        price: Joi.number(),
        // image:Joi.image().allowTypes('jpg'),
        userId:Joi.number()
    });
    validateRequest(req, next, schema);
}

module.exports = router;

function insertEquipment(req, res, next) {
    equipmentService.insertEquipment(req.body, req.get('origin'))
        .then(() => res.json({ message: 'Equipment inserted successfully' }))
        .catch(next);
}