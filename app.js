const express = require("express");
const path = require("path");
const app = express();

const {router} = require("./routes/navBar.route.js");
const news = require("./routes/news.route.js");
const posts = require("./routes/post.route.js");

const sendImages = require("./midlewares/images.midleware.js");
const { rmSync } = require("fs");
const { request } = require("http");


const PORT = 8000;
let IP = "localhost";


app.set("view engine","ejs");



app.use(router);
app.use("/news",news);
app.use("/post",posts);

app.use("/images",express.static(path.resolve(__dirname,"images")));
//app.use("/images",sendImages);
//app.use(express.static(__dirname,"css"));


app.get("/css/main.css",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"css","main.css"));
})

app.get("/js/openArticle.js",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"js","openArticle.js"));
})

app.get("/js/getProfile.js",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"js","getProfile.js"));
})

app.listen(PORT,IP,()=>{
    console.log(`Server have been started on ${PORT}`);
});

