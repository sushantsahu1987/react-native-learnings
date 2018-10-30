const express = require('express');
const app = express();
const speakeasy = require('speakeasy');

app.get('/', (req,res) => {
    res.set('Content-Type','image/png')
    .status(200).sendFile(__dirname+'/qr.png');

});

app.listen(3000, ()=>console.log('server is running at port 3000'));