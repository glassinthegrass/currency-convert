require('dotenv').config();
const express = require('express');
const app = express();
const coinCtrl =require('./Ctrl/coinCtrl.js')
const path =require('path');
const {SERVER_PORT}=process.env;
app.use(express.json())

app.get('/api/currency',coinCtrl.getRates)

app.use(express.static(__dirname + "/../build"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
app.listen(SERVER_PORT,()=>{
    console.log(`from currency to 통화, pass through port ${SERVER_PORT}`)
})