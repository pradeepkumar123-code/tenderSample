const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, required: false },
    // power: { type: Number, required: false },
    // price: { type: Number, required: false },
    
});

// schema.virtual('isVerified').get(function () {
//     return !!(this.verified || this.passwordReset);
// });

// schema.set('toJSON', {
//     virtuals: true,
//     versionKey: false,
//     transform: function (doc, ret) {
//         // remove these props when object is serialized
//         delete ret._id;
//         //delete ret.passwordHash;
//     }
// });

module.exports = mongoose.model('Equipment', schema);