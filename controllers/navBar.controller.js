const {pool} = require("../db.js");
async function createNews(table){
    /*
    let arrData = [{id:0 ,head: "Заголовок" ,p:"Краткое описание Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, incidunt ipsum? Eos fuga repellendus eum alias voluptates omnis labore itaque asperiores quos molestiae. Fuga quos, minus asperiores ex totam eaque."},
    {id:1 ,head: "Заголовок" ,p:"qwdqwd qw dqwd qwd qwd "},
    {id:2 ,head: "Заголовок" ,p:"qwdqwd qw dqwd qwdeqweq we qweqweqweqw eqweqwe qweqwe qwd "},
    {id:3 ,head: "Заголовок" ,p:"Краткое описание Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, incidunt ipsum? Eos fuga repellendus eum alias voluptates omnis labore itaque asperiores quos molestiae. Fuga quos, minus asperiores ex totam eaque."},
    {id:4 ,head: "Заголовок" ,p:"qwdqwd qw dqwd qwd qwd "}];
    */

    let Data = await pool.query(`SELECT * FROM ${table}`);
    let arrData =  Data.rows;


    let htmlNewsItems = "";
    let htmlSections = "";

    
    let border = Math.floor(arrData.length/3);
    let rowCountLast;
    let row;

    if(arrData.length%3!=0){
        rowCountLast = arrData.length%3;
    }

    
    for (row = 0;row<border;row++){
        for(let i = 0;i<3;i++){
            htmlNewsItems+=`<div class = "Items">
                            <p class = "idNews disabled">${arrData[row*3+i].id}</p>
                            <p class = "type disabled">${table}</p>
                            <h1>${arrData[row*3 + i].head}</h1>
                            <p>${arrData[row*3 + i].body}</p>
                    </div>`;
            }
        htmlSections+= `<div class = "News_section">${htmlNewsItems}</div>`;
        htmlNewsItems = "";
    }

    if (rowCountLast){
        for(let i = 0;i<rowCountLast;i++){
            htmlNewsItems+=`<div class = "Items">
                            <p class = "idNews disabled">${arrData[row*3+i].id}</p>
                            <p class = "type disabled">${table}</p>
                            <h1>${arrData[row*3 + i].head}</h1>
                            <p>${arrData[row*3 + i].body}</p>
                    </div>`;
            }
        htmlSections+= `<div class = "News_section">${htmlNewsItems}</div>`;
    }
    return htmlSections;
}

class navBar{
    async sendGreeting(req,res){
        res.render('Greeting.ejs',{title:"Приветствие",timeTravel:"",active:""});
    }
    async sendNFT(req,res){
       
        let htmlSections = await createNews("nft");
        res.render("category.ejs",{active:"nft",title:"НФТ",inNews:htmlSections});


        
    }
    async sendCrypto(req,res){
        let htmlSections = await createNews("crypto");
        res.render("category.ejs",{active:"crypto",title:"Крипта",inNews:htmlSections});
    }
    async sendSecurities(req,res){
        let htmlSections = await createNews("sec");
        res.render("category.ejs",{active:"securities",title:"Ценные бумаги",inNews:htmlSections});
    }
    
    async sendProfile(req,res){
        res.render("profile.ejs",{active:"profile",title:"Профиль"});
    }

    async sendLogin(req,res){
        res.render("login.ejs",{active:"login",title:"Вход"});
    }
    async sendReg(req,res){
        res.render("registration.ejs",{active:"reg",title:"Регистрация"});
    }
    async sendPredloshka(req,res){

        res.render("predloshka.ejs",{active:"predloshka",title:"Предложка"});
    }

    async sendInfoPredloshka(req,res){
        if(!req.body)res.sendStatus(400);
        pool.query(`INSERT INTO ${req.body.category} (head,body) values($1,$2) RETURNING *`,[req.body.head,req.body.body]);
        let el = `<h2>В категорию ${req.body.category} было записан заголовок ${req.body.head} и текст статьи - ${req.body.body}.</h2>`;
        res.render("temp.ejs",{active:"predloshka",title:"Предложка",data:el});
    }

    async sendInfoRegistration(req,res){
        if(!req.body)res.sendStatus(400);
        pool.query(`INSERT INTO person (name,surname,mail,nickname,password) values($1,$2,$3,$4,$5) RETURNING *`,[req.body.name,req.body.surname,
        req.body.mail,req.body.nickname,req.body.password]);
        
        let el = `<h2>Пользователь ${req.body.nickname} успешно зарегистрирован.</h2>`;
        res.render("temp.ejs",{active:"none",title:"Регистрация",data:el});
    }

    async sendInfoLogin(req,res){
        
        if(!req.body)res.sendStatus(400);

        let nickname = req.body.login;
        let password = req.body.password;

        let arrData = await pool.query("SELECT * FROM person");
        let Data = arrData.rows;

        let verify = false;
        Data.forEach(element => {

            if(element.nickname == nickname && element.password == password){
                let el = `<h2>Пользователь ${req.body.login} добро пожаловать.</h2>`;
                res.render("tempVerif.ejs",{token:element.id,active:"none",title:"ВХОД",data:el});
                verify = true;
                return ;

            }
        });
        if (verify==false){
            let el = `<h2>В доступе отказано!</h2>`;
            res.render("temp.ejs",{active:"none",title:"Вход",data:el});
        }

        
        
    }
}

module.exports = new navBar();