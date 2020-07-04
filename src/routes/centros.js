const router = require('express').Router();

const Centro = require('../models/centros');

const {isAuthenticated} = require('../helper/auth');


function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }


router.get('/centros/seleccion', isAuthenticated, (req, res) => {
    if(req.user.acceso != 'administrador'){
        res.redirect('/panel')
    }else {
        res.render('centros/seleccion');
    }
    
});


router.post('/centros/seleccion', isAuthenticated, (req, res) => {
    if(req.user.acceso != 'administrador'){
        res.redirect('/panel')
    }
    const {accion} = req.body;
    
    if(accion === 'ingresar') res.render('centros/ingresar');
    if(accion === 'listar') {
        res.redirect('/centros/listar');
    }
})

router.post('/centros/ingresar', isAuthenticated, async(req, res) => {
    if(req.user.acceso != 'administrador'){
        res.redirect('/panel')
    }
    const {nombre, municipio, zona, colegiosLower} = req.body;
    let colegios = colegiosLower.map(function(text){
        return text.toUpperCase();
    }) ;
    // console.log(colegios);
    const newCentro = new Centro({nombre, municipio, zona, colegios});
    newCentro.nombre = titleCase(newCentro.nombre);
    newCentro.municipio = titleCase(newCentro.municipio)
    newCentro.zona = titleCase(newCentro.zona)
        


        Centro.findOne({ nombre: newCentro.nombre, municipio: newCentro.municipio }, function (err, centro) {
            if (err) {
                return console.log("error: " + err);
              }
            console.log(centro);
            if(!centro){

                Centro.findOne({municipio: newCentro.municipio, colegios: colegios}, function(err, colegio){
                    if (err) {
                        return console.log("error: " + err);
                    } 
                    if(!colegio){
                        newCentro.save();
                        const successMessage = {text: 'centro ingresado correctamente'};
                        res.render('centros/ingresar', {successMessage});
                    } else {
                        const errMessage = {text: 'alguno de los colegios ha sido ingresado anteriormente'};
                        res.render('centros/ingresar', {errMessage})
                    }
                })  
            } else {
                const errMessage = {text: 'Centro duplicado. No puede ingresar un centro mas de una vez'};
                res.render('centros/ingresar', {errMessage})
            }
        });

})

router.get('/centros/listar', isAuthenticated, async(req, res) => {
    if(req.user.acceso != 'administrador'){
        res.redirect('/panel')
    }
    const centros = await Centro.find().sort({municipio: 1});

    res.render('centros/listar', {centros});

})


router.delete('/centros/:idCentro', isAuthenticated, async(req, res) => {
    if(req.user.acceso != 'administrador'){
        res.redirect('/panel')
    }
    Centro.findOneAndDelete({ _id: req.params.idCentro }, function (err) {
        if (err) {
            return console.log("error: " + err);
            res.send('Hubo un error');
          } else {
            console.log(`el centro ${req.params.id} ha sido elimando`);
            res.redirect('/centros/listar');
        }
    }); 
})

router.get('/centros/:idCentro', isAuthenticated, async(req, res) => {
    if(req.user.acceso != 'administrador'){
        res.redirect('/panel')
    }
    Centro.findById(req.params.idCentro, function (err, centro) {
        if (err) {
            return console.log("error: " + err);
          }
        console.log(centro);
        if(centro){
            res.render('centros/editar', {centro});
        }
    });
});

router.put('/centros/:idCentro', isAuthenticated, async(req, res) => {
    if(req.user.acceso != 'administrador'){
        res.redirect('/panel')
    }
    let {nombre, municipio, zona, colegiosLower} = req.body;
    let colegios = colegiosLower.map(function(text){
        return text.toUpperCase();
    }) ;
    nombre = titleCase(nombre);
    municipio = titleCase(municipio)
    zona = titleCase(zona)
    const id = req.params.idCentro
    Centro.findByIdAndUpdate(id, {nombre: nombre, municipio: municipio, zona: zona, colegios: colegios}, function (err) {
        if (err) {
            return console.log("error: " + err);
            res.send('Hubo un error');
          } else {
            console.log(`el centro ${req.params.id} ha sido actualizado`);
            res.redirect('/centros/listar');
        }
    }); 
});



module.exports = router;