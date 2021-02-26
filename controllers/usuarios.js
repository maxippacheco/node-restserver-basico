const { response } = require('express');


const usuariosGet = (req, res = response) => {

    const { q, nombre, apikey } = req.query;

    res.json({
        //ok: true,
        msg: 'get API - controlador',
        q, 
        nombre, 
        apikey 
    })
};

const usuariosPost = (req, res = response) => {
    
    //const body
    const {nombre, edad} = req.body;
    
    res.status(400).json({
        //ok: true,
        msg:'post API - controlador',
        nombre,
        edad
    });
};

const usuariosPut = (req, res = response) => {
    
    const id = req.params.id;
    
    res.status(400).json({
        //ok: true,
        msg:'put API - controlador',
        id
    });
};


const usuariosPatch = (req, res = response) => {
    res.status(201).json({
        //ok: true,
        msg:'patch API - controlador'
    })
};

const usuariosDelete = (req, res = response) => {
    res.status(400).json({
        //ok: true,
        msg:'delete API - controlador'
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}