const express = require('express');
const connection = require('./db');
const router = require('./routes');
const app = express();
app.use(express.json());
const port = 1000;
app.use('/product',router);
app.listen(port,async()=>{
    console.log(`Server is running on port ${port}`);
    await connection();
})