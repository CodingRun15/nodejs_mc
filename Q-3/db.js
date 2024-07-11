const mongoose = require('mongoose');
const connection = ()=>{
    try{
        mongoose.connect(`mongodb://127.0.0.1:27017/totop`);
      return console.log('Connected to MongoDB');
    }catch(error){
       return console.error('Failed to connect to MongoDB');
    }
}
module.exports = connection;