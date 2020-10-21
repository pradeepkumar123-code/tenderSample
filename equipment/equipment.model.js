const { number, string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const fs = require('fs');

// var imagefile = fs.readFileSync(req.files.image.path, function (err, data) {
//     if (err) throw err;
//     var encodedImage = new Buffer(data, 'binary').toString('base64');
//     var decodedImage = new Buffer(encodedImage, 'base64').toString('binary');
// });
const schema = new Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, required: false },
    power: { type: Number, required: false },
    price: { type: Number, required: false },
    // image :imagefile,
    userId:{type:Number,required:false},
    acceptTerms: Boolean,
    verificationToken: String,
    verified: Date,
    updated: Date
});

module.exports = mongoose.model('Equipment', schema);