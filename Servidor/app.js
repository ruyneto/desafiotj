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
  const msg = '[{"nome":"nome1","idade":"18"},{"nome":"nome2","idade":"19"},{"nome":"nome3","idade":"20"},{"nome":"nome4","idade":"21"}]';
  res.send(msg);
});

app.listen(3000,()=>{
  console.log("Servidor on.");
});
