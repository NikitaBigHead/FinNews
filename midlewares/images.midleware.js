const path = require("path");

function  sendimage(req,res,next){
    console.log(path.join(path.parse(__dirname).dir,"images",req.url));
    res.sendFile(path.join(path.parse(__dirname).dir,"images",req.url));
    next();
}

module.exports = sendimage;