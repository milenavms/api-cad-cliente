const express = require('express');
const bodyParser = require('body-parser');


const app = express();

//Configurações
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
   //permissão de cors
  app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//Rotas
// registar e entrar
require('./src/controllers/autenticacaoController')(app);
// perfil do usuário
require('./src/controllers/projetoController')(app)

//Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando")
})

