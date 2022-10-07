const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.listen(port,()=>{

    console.log('server started successfully!')

});