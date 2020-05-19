const mongoose = require('mongoose')

const ObjectID = mongoose.Schema.Types.ObjectId;

module.exports = new mongoose.Schema({
    RoleId: {
        type: String
    },
    userRole:{
        type: String
    },
    ObjId: {
        type: ObjectID
    }
});