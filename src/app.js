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
//instruction of the site link https://buddy.works/guides/how-dockerize-node-application
//docker container run to=>docker run -p <docker=>yourwishport>:<local=>yourwishPort> <build dockername>
//if you access the docker rest api you provide the http://localhost:<put docker port here>

//https://linuxize.com/post/how-to-install-and-use-docker-on-ubuntu-18-04/