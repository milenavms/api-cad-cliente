const mongoose = require('mongoose');

// mongoose
mongoose.Promise = global.Promise 

// conexão com o banco de dados mongodb - dbcadastrocliente
mongoose.connect("mongodb://localhost/dbcadastrocliente", {useMongoClient: true}).then(()=>{
    console.log("Conectado ao Mongo")
}).catch((err)=>{
    console.log("Erro ao se conectar" + err)
})

module.exports = mongoose;