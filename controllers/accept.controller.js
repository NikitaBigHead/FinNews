const {pool} = require("../db.js");

class accept
{
    async accepting(req,res){
        let arr = await pool.query("SELECT * FROM person");
        let data = arr.rows;
        console.log("work");
        data.forEach(element => {
            if(req.body.id == element.id){

                res.json(element);
                
            }
        });
        
    }
}
module.exports = new accept();