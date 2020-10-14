const express = require('express');
const router = express.Router();

const Historia = require('../models/Historia');

router.get('/historia/add', (req, res) =>{
    res.render('historia/new-historia');
});

router.post('/historia/new-historia', async (req, res) => {
    const { nombre, apellido, identificacion, correo, agudezaD,agudezaI, biomicroscopiaD, biomicroscopiaI,
        fondoD, fondoI, descripcion } = req.body; 
    const erros = [];
    if(!nombre){
        erros.push({text:'Digite el Nombre'})
    }
    if (!apellido) {
        erros.push({text: 'Digite los Apellidos'})
    }
    if(!identificacion){
        erros.push({text:'Digite la Identificación'})
    }
    if(erros.length > 0){
        res.render('historia/new-historia', {
            erros,
            nombre,
            apellido,
            identificacion,
            correo,
            agudezaD,
            agudezaI,
            biomicroscopiaD,
            biomicroscopiaI,
            fondoD,
            fondoI,
            descripcion
            
        });
    } else {
        const newHistoria = new Historia({nombre, apellido, identificacion, correo, agudezaD,agudezaI, biomicroscopiaD, biomicroscopiaI,
            fondoD, fondoI, descripcion});
            await newHistoria.save();
            res.redirect('/historia');
    }
});

router.get('/historia', async (req, res) =>{

  const historia = await Historia.find().sort({date: 'desc'});
  res.render('historia/all-historia', { historia});

});
module.exports= router;