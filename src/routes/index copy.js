const router = require('express').Router();

const Centro = require('../models/centros');


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



router.get('/', (req, res) => {
    res.render("index");
})

router.get('/actas/seleccion', (req, res) => {
    res.render('actas/seleccion');
})

router.get('/actas/registro-p', (req, res) => {
    res.render('actas/registro-p');
})

router.get('/actas/registro-s', (req, res) => {
    res.render('actas/registro-s');
})

router.get('/actas/registro-d', (req, res) => {
    res.render('actas/registro-d');
})

router.post('/actas/seleccion', (req, res) => {
    let {nivelActa, colegio, municipio} = req.body;

    console.log(nivelActa);
    colegio = titleCase(colegio);
    const errors = [];
    const centro = {};

    Centro.findOne({ colegios: colegio, municipio: municipio}, function (err, colegioExists) {
        if (err) {
            return console.log("error: " + err);
          }

          console.log(colegioExists);
        if(colegioExists){
            centro.nombre = colegioExists.nombre.toUpperCase();
            if(nivelActa === 'presidencial') {
                res.render('actas/registro-p', {nivelActa, colegio, centro});
            } else if (nivelActa === 'senatorial') {
                res.render('actas/registro-s', {nivelActa, colegio, centro});
            } else if (nivelActa === 'diputados') {
                res.render('actas/registro-d', {nivelActa, colegio, centro});
            } 
        } else {
            errors.push({text: 'No se encuentra el colegio, favor de ingresar un colegio correcto'});
        }

        if(errors.length > 0){
            res.render('actas/seleccion', {errors});
        }
    });



    // if(!colegioExists){
    //     if(nivelActa === 'presidencial') {
    //         res.render('actas/registro-p', );
    //     } else if (nivelActa === 'senatorial') {
    //         res.render('actas/registro-s');
    //     } else if (nivelActa === 'diputados') {
    //         res.render('actas/registro-d');
    //     } 
    // }else {
    //     errors.push({text: 'No se encuentra el colegio, favor de ingresar un colegio correcto'});
    // }
    
    // if(errors.length > 0){
    //     res.render('actas/seleccion', {errors});
    // }
})



router.get('/centros/seleccion', (req, res) => {
    res.render('centros/seleccion');
})


router.post('/centros/seleccion', (req, res) => {
    const {accion} = req.body;
    
    if(accion === 'ingresar') res.render('centros/ingresar');
    if(accion === 'listar') {
        res.redirect('/centros/listar');
    }
})

router.post('/centros/ingresar', async(req, res) => {
    const {nombre, municipio, zona, colegiosLower} = req.body;
    console.log(colegiosLower);
    let colegios = colegiosLower.map(function(text){
        return text.toUpperCase();
    }) ;
    // console.log(colegios);
    const newCentro = new Centro({nombre, municipio, zona, colegios});
    newCentro.nombre = titleCase(newCentro.nombre);
    newCentro.municipio = titleCase(newCentro.municipio)
    newCentro.zona = titleCase(newCentro.zona)

    // console.log(nombre);



        // Centro.findOne({ nombre: newCentro.nombre, municipio: newCentro.municipio }, function (err, centro) {
        //     if (err) {
        //         return console.log("error: " + err);
        //       }
        //     console.log(centro);
        //     if(!centro){
        //         newCentro.save();
        //         const successMessage = {text: 'centro ingresado correctamente'};
        //         res.render('centros/ingresar', {successMessage});
        //     } else {
        //         const errMessage = {text: 'No puede ingresar un centro mas de una vez'};
        //         res.render('centros/ingresar', {errMessage})
        //     }
        // });
        
        


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







        // newwwww*******************************


        // Centro.findOne({ nombre: newCentro.nombre }, function (err, centro) {
        //     if (err) {
        //         return console.log("error: " + err);
        //       }
        //     if(!centro){
        //         newCentro.save();
        //         const successMessage = {text: 'centro ingresado correctamente'};
        //         res.render('centros/ingresar', {successMessage});
        //     } else {

        //         Centro.findOne({ municipio: newCentro.municipio }, function (err, centro) {
        //             if (err) {
        //                 return console.log("error: " + err);
        //               }
        //               if(!centro){
        //                 newCentro.save();
        //                 const successMessage = {text: 'centro ingresado correctamente'};
        //                 res.render('centros/ingresar', {successMessage});
        //             } else {
        //                 const errMessage = {text: 'No puede ingresar un centro mas de una vez'};
        //         res.render('centros/ingresar', {errMessage})
        //             }
        //         })
                
        //     }
        // });



        // *************************************************************************************//

    // console.log(newCentro);

    // await newCentro.save();
    // res.redirect('/');
})

router.get('/centros/listar', async(req, res) => {
    const centros = await Centro.find();

    res.render('centros/listar', {centros});

})


router.delete('/centros/:idCentro', async(req, res) => {
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

router.get('/centros/:idCentro', async(req, res) => {
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

router.put('/centros/:idCentro', async(req, res) => {
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

router.post('/test', (req, res) => {
    const {votos} = req.body;
    console.log(votos);

    res.send('ok');

})


router.get('/users/seleccion', (req, res) => {
    res.render('users/seleccion');
})

module.exports = router;