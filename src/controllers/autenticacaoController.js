const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig  = require('../config/auth.json')

const Cliente = require('../models/Cliente');

const router = express.Router();

// gera token
function geraToken(params = {}){
    return jwt.sign( params, authConfig.secret_key, {
        expiresIn: 86400,
    });
}


// Rota: cadastro do usuário
router.post('/registro',async (req, res) => {
    const {email} =  req.body;

    try{
        if( await Cliente.findOne({email})){
            return res.status(400).send( {error: 'Usuário já existe'})
        }

        const cliente =  await Cliente.create(req.body);
        cliente.senha = undefined;
        
        // resposta cliente e token
        return res.send({
            cliente,
            token: geraToken({ id: cliente.id }),
        });

    }catch(err){
        return res.status(400).send({ error: 'Falha ao registrar novo cliente'})
    }
});



//Rota: autenticação
router.post('/entrar', async(req, res) =>{
    const {email, senha} = req.body;

    const cliente =  await Cliente.findOne({ email}).select('+senha')

    if(!cliente){
        return res.status(400).send({ error: 'Usuário não encontrado'})
    }

    if(!await bcrypt.compare(senha , cliente.senha)){
        return  res.status(400).send({ error: 'Senha Inválida'})
   
    }

    cliente.senha = undefined;

    // resposta cliente e token
    res.send({
        cliente,
        token: geraToken( { id: cliente.id }),
    });

});



module.exports = app => app.use('/autenticacao', router);