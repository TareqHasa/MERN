const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required:[true,"Name is required "],
        minlength:[3,"Name must be at least 3 character long"]
    
    },
    position: { 
        type: String,
        required:[true,"Position is required "],
    
    },
    status: { 
        game1:{type:Number},
        game2:{type:Number},
        game3:{type:Number}
    
    }

}, { timestamps: true });
module.exports.Player = mongoose.model('player', PlayerSchema);