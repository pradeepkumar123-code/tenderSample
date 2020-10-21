const { number, string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, required: false },
    power: { type: String, required: false },
    price: { type: String, required: false },
    image :{ type: String, required: false },
    userId:{type:String,required:false},
    acceptTerms: Boolean,
    verificationToken: String,
    verified: Date,
    updated: Date
});

module.exports = mongoose.model('Equipment', schema);