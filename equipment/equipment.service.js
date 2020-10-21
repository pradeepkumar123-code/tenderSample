const db = require('_helpers/db');

module.exports = {
    insertEquipment
};

async function insertEquipment(params, origin) {

    const equipment = new db.Equipment(params);
    console.log('equipment' , equipment);
    // save account
   await equipment.save();    
}


