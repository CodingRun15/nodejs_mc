const express = require('express');
const { connection, default: mongoose } = require('mongoose');
const UserSchema = require('./schema/userSchema');
const app = express();
const port = 5000;
app.use(express.json());
app.get('/',(req, res) => {
     return res.json({"home":"hello world"});
})
app.get('/users',async (req,res)=>{
   const users =await UserSchema.find();
  return res.json(users);
})

app.post('/adduser',async (req,res)=>{
    const {email} = req.body;
  const user = await UserSchema.findOne({email:email});
  if(user){
   return res.status(400).send('User already exists');
  }
  const newUser = new UserSchema(req.body);
  await newUser.save();
  return res.json({"user": newUser});
})
app.listen(port,async ()=>{
    console.log(`Server is running on port ${port}`);
   await mongoose.connect('mongodb://127.0.0.1:27017/totop');
   console.log('connection to database established');
});