const Route = require("express");
const newsController = require("../controllers/news.controller.js");
const news = Route();


news.get("/nft/:id",newsController.sendNFT);
news.get("/crypro/:id",newsController.sendCrypto);
news.get("/sec/:id",newsController.sendSec);

module.exports = news;