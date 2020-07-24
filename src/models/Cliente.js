const mongoose = require('../database');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const ClienteSchema = new Schema({
    nome:{
        type: String,
        require: true
    },
    sobrenome:{
        type: String,
        require: true
    },
    nascimento:{
        type: String,
        require: true
    },
    sexo:{
        type: String
    },
    cpf:{
        type: String,
        require: true
    },
    destinatario:{
        type: String
    },
    cep:{
        type: String,
        require: true
    },
    endereco:{
        type: String,
        require: true
    },
    numero:{
        type: Number,
        require: true
    },
    complemento:{
        type: String
    },
    bairro:{
        type: String,
        require: true
    },
    cidade:{
        type: String,
        require: true
    },
    estado:{
        type: String,
        require: true
    },
    referencia:{
        type: String
    },
    celular:{
        type: String,
        require: true
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        require: true
    },
    senha:{
        type: String,
        require: true,
        select: false
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});


//encriptação com bcryotjs
ClienteSchema.pre('save',  async function(next){
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha =  hash;
    next();
});

const Cliente = mongoose.model('Cliente', ClienteSchema);
module.exports = Cliente;