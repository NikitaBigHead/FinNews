const Router = require("express");
const navBar = require("../controllers/navBar.controller.js");
const router = Router();


router.get("/",navBar.sendGreeting);
router.get("/nft",navBar.sendNFT);
router.get("/crypto",navBar.sendCrypto);
router.get("/securities",navBar.sendSecurities);
router.get("/predloshka",navBar.sendPredloshka);
router.get("/profile",navBar.sendProfile);
router.get("/login",navBar.sendLogin);
router.get("/reg",navBar.sendReg);

module.exports = {router};