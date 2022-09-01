const express = require("express");
const navBar = require("../controllers/navBar.controller.js");
const accept = require("../controllers/accept.controller.js");
const posts = express();

const urlencodedParser = express.urlencoded({extended: false});

posts.post("/predloshka",urlencodedParser,navBar.sendInfoPredloshka);
posts.post("/registration",urlencodedParser,navBar.sendInfoRegistration);
posts.post("/login",urlencodedParser,navBar.sendInfoLogin);

//posts.post("/accept",accept.accepting);


module.exports = posts;