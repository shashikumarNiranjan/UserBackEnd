const mongoose = require('mongoose')

const ObjectID = mongoose.Schema.Types.ObjectId;

module.exports = new mongoose.Schema({
    userId: {
        type: String
    },
    userName: {
        type: String
    },
    userRole: {
        type: String
    },
    email: {
        type: String
    },
    phoneNo:{
        type: String
    },
    ObjId: {
        type: ObjectID
    }
});