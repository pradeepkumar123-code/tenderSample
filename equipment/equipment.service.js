const db = require('_helpers/db');

module.exports = {
    insertEquipment
};

function insertEquipment(params, origin) {

    const equipment = new db.Equipment(params);
    console.log('equipment' , equipment);
    // save account
    equipment.save();

    
}


