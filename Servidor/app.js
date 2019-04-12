const express = require("express");
const app     = express();


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/",(req,res)=>{
  console.log("Requisicao Feita");
  const msg = '[{"nome":"Cachorro","idade":"10","link":"https://nhl.bamcontent.com/images/photos/301406224/1024x576/cut.jpg"},{"nome":"Gato","idade":"9","link":"http://lupusalimentos.com.br/system/wp-content/uploads/2017/02/5-coisas-que-seu-gato-faz-LupusAlimentos.jpg"},{"nome":"Hamster","idade":"1","link":"https://www.petz.com.br/blog/wp-content/uploads/2017/07/hamster01.jpg"},{"nome":"Preá","idade":"3","link":"https://www.oamigopet.com/wp-content/uploads/2018/04/guinea-pig-2412069_960_720-e1524103080123.jpg"}]';
  res.send(msg);
});

app.listen(3000,()=>{
  console.log("Servidor on.");
});
