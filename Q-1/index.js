const http = require('http');
const port = 5000;
const server = http.createServer((req,res)=>{
    res.write('Hello World');
    res.end();
}).listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
