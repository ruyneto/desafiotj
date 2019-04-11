const express  = require("express");
const app      = express();
const mensagem = require("./msg");

app.set("view engine","ejs");

const index = require("./index.js")(app);

app.listen(3000,function(){
  console.log("Servidor on");
  console.log(mensagem);
});
