const express = require('express');
const authMiddleware = require('../middleware/auth')

const router = express.Router();


router.use(authMiddleware);

// Rota do usuário autenticado com retorno do id
router.get('/perfil', (req, res) => {
    res.send( {ok: true, clienteId: req.clienteId});
})

module.exports =  app => app.use('/projeto', router)