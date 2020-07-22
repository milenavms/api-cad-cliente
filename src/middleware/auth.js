const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json')


module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    // verifica se o token foi informado
    if(!authHeader)
        return res.status(401).send({ error: 'Token não informado'})

    
    // verifica o formato do token Bearer + secret_key(hash)
    const parts = authHeader.split(' ');
    if(!parts.length ===2)
        return res.status(401).send({ error: 'Token incompleto'})

    // verifica se a palavra Bearer existe no schema
    const [schema, token] = parts;
    if(!/^Bearer$/i.test(schema))
        return res.status(401).send({ error: 'Token com formato inválido '})


    jwt.verify(token, authConfig.secret_key, (err, decode)=>{
        // verifica se token for diferente da secret_key
        if(err) return res.status(401).send( { error: 'Token Inválido'})

        req.clienteId = decode.id;

        return next();
    });


};