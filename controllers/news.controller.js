const {pool} = require("../db.js");
class newsController{

    async sendNFT(req,res){
        let id =  Number(req.params.id);

        let element = await pool.query("SELECT * FROM nft where id = $1",[id]);
        let data = element.rows[0]
        res.render("news.ejs",{title:"Новость",head:data.head,body:data.body ,active:"none"});
    
    }
    async sendCrypto(req,res){
        let id =  Number(req.params.id);

        let element = await pool.query("SELECT * FROM crypto where id = $1",[id]);
        let data = element.rows[0]
        res.render("news.ejs",{title:"Новость",head:data.head,body:data.body ,active:"none"});
    
    }
    async sendSec(req,res){
        let id =  Number(req.params.id);

        let element = await pool.query("SELECT * FROM sec where id = $1",[id]);
        let data = element.rows[0]
        res.render("news.ejs",{title:"Новость",head:data.head,body:data.body ,active:"none"});
    }
    
}
module.exports = new newsController();