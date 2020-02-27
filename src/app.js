const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.get('/docker',(req,res)=>{
    res.send({
        status:true,
        msg:"The msg is get successfully"
    })
})
app.listen(5000,()=>{
    console.log('http://localhost:5000');
})