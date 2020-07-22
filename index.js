const express = require('express');
const bodyParser = require('body-parser');


const app = express();

//Configurações
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
    

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

