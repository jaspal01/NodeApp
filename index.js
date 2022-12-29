const express = require("express");
const app = express();
const port = 8080;

app.get('/', (req, res)=> {
    res.send("Home Page");
})



app.listen(port, (err) => {
    if(err) throw err;
    console.log("Some Error Occoured");
})