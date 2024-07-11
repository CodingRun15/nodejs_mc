const mongoose = require('mongoose');
const UserSchema = mongoose.model('user',{
    email:{
        type: String,
        required: true,
    },
    password: {
     type:String,
    }
})
module.exports = UserSchema;