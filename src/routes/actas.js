const router = require('express').Router();

const Centro = require('../models/centros');
const ActaPresidencial = require('../models/actasPresidencial');
const ActaSenatorial = require('../models/actasSenatorial');
const ActaDiputadosD1 = require('../models/actasDiputadosD1');
const ActaDiputadosD2 = require('../models/actasDiputadosD2');

const ActaPresidencialPre = require('../models/actasPresidencialPre');
const ActaSenatorialPre = require('../models/actasSenatorialPre');
const ActaDiputadosD1Pre = require('../models/actasDiputadosD1Pre');
const ActaDiputadosD2Pre = require('../models/actasDiputadosD2Pre');

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


//  var convertToNumber = function(spy){
//   
//     Object.keys(spy).forEach(function(key){ spy[key] =  Object.values() });
//     return spy;
//   }



router.get('/actas/seleccion', isAuthenticated, (req, res) => {
    if(req.user.acceso === 'verificador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    const paginaNombre = 'Seleccion Actas'
    res.render('actas/seleccion', {paginaNombre});
})

router.get('/actas/registro-p', isAuthenticated, (req, res) => {
    if(req.user.acceso === 'verificador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    res.render('actas/registro-p');
})

router.get('/actas/registro-s', isAuthenticated, (req, res) => {
    if(req.user.acceso === 'verificador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    res.render('actas/registro-s');
})

router.get('/actas/registro-d1', isAuthenticated, (req, res) => {
    if(req.user.acceso === 'verificador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    res.render('actas/registro-d1');
})

router.get('/actas/registro-d2', isAuthenticated, (req, res) => {
    if(req.user.acceso === 'verificador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    res.render('actas/registro-d2');
})

router.post('/actas/seleccion', isAuthenticated, (req, res) => {
    if(req.user.acceso === 'verificador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    let {nivelActa, colegio, municipio} = req.body;

    console.log(colegio + '***************');
    console.log(colegio);
    colegio = colegio.toUpperCase();
    console.log(colegio + '############');
    console.log(municipio);
    const errors = [];
    const centro = {};

    Centro.findOne({ colegios: colegio, municipio: municipio}, function (err, colegioExists) {
        if (err) {
            return console.log("error: " + err);
          }

        //   console.log(colegioExists);
        if(colegioExists){

            if(nivelActa == 'presidencial'){



                ActaPresidencialPre.findOne({colegio: colegio, municipio:municipio}, function (err, actaPre) {
                    if(!actaPre){
                        ActaPresidencial.findOne({colegio: colegio, municipio:municipio}, function (err, acta) {
                            if(!acta){
                                console.log('No encontrado');
                                console.log(acta);
                                centro.nombre = colegioExists.nombre.toUpperCase();
                                res.render('actas/registro-p', {nivelActa, colegio, centro, municipio});
                            } else{
                                errors.push({text: 'Acta duplicada: El acta que intenta ingresar, ya ha sido ingresada anteriormente'});
                                res.render('actas/seleccion', {errors});
                            }
                        })
                    } else {
                        errors.push({text: 'Acta en Verificacion. El acta que intenta ingresar aun se encuentra en estado de verificaion.'});
                        res.render('actas/seleccion', {errors});
                    }
                });
            }




            //     ActaPresidencial.findOne({colegio: colegio, municipio: municipio}, (err, documento) => {

                    
            //         if (err) {
            //             return console.log("error: " + err);
            //         }
            //         if(!documento){
            //             console.log('No encontrado');
            //             console.log(documento);
            //             centro.nombre = colegioExists.nombre.toUpperCase();
            //             res.render('actas/registro-p', {nivelActa, colegio, centro, municipio});
            //         } else {
            //             errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
            //             res.render('actas/seleccion', {errors});
            //         }
            //     })     
            // }; 


            if(nivelActa == 'senatorial'){



                ActaSenatorialPre.findOne({colegio: colegio, municipio:municipio}, function (err, actaPre) {
                    if(!actaPre){
                        ActaSenatorial.findOne({colegio: colegio, municipio:municipio}, function (err, acta) {
                            if(!acta){
                                console.log('No encontrado');
                                console.log(acta);
                                centro.nombre = colegioExists.nombre.toUpperCase();
                                res.render('actas/registro-s', {nivelActa, colegio, centro, municipio});
                            } else{
                                errors.push({text: 'Acta duplicada: El acta que intenta ingresar, ya ha sido ingresada anteriormente'});
                                res.render('actas/seleccion', {errors});
                            }
                        })
                    } else {
                        errors.push({text: 'Acta en Verificacion. El acta que intenta ingresar aun se encuentra en estado de verificaion.'});
                        res.render('actas/seleccion', {errors});
                    }
                });
            }



            //     ActaSenatorial.findOne({colegio: colegio, municipio: municipio}, (err, documento) => {

            //         console.log(colegio);
            //         if (err) {
            //             return console.log("error: " + err);
            //         }
            //         if(!documento){
            //             console.log('No encontrado');
            //             console.log(documento);
            //             // centro.nombre = colegioExists.nombre.toUpperCase();               
            //             // res.render('actas/registro-s', {nivelActa, colegio, centro, municipio}); 
                        
            //             ActaSenatorialPre.findOne({colegio: colegio, municipio: municipio}, (err, documento) => {

            //                 console.log(colegio);
            //                 if (err) {
            //                     return console.log("error: " + err);
            //                 }
            //                 if(!documento){
            //                     console.log('No encontrado');
            //                     console.log(documento);
            //                     centro.nombre = colegioExists.nombre.toUpperCase();               
            //                     res.render('actas/registro-s', {nivelActa, colegio, centro, municipio});         
            //                 } else {
            //                     errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
            //                     res.render('actas/seleccion', {errors});
            //                 }
            //             }) 

            //         } else {
            //             errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
            //             res.render('actas/seleccion', {errors});
            //         }
            //     })     
            // }; 


            



            if(nivelActa == 'diputadosD1'){




                ActaDiputadosD1Pre.findOne({colegio: colegio, municipio:municipio}, function (err, actaPre) {
                    if(!actaPre){
                        ActaDiputadosD1.findOne({colegio: colegio, municipio:municipio}, function (err, acta) {
                            if(!acta){
                                console.log('No encontrado');
                                console.log(acta);
                                centro.nombre = colegioExists.nombre.toUpperCase();
                                res.render('actas/registro-d1', {nivelActa, colegio, centro, municipio});
                            } else{
                                errors.push({text: 'Acta duplicada: El acta que intenta ingresar, ya ha sido ingresada anteriormente'});
                                res.render('actas/seleccion', {errors});
                            }
                        })
                    } else {
                        errors.push({text: 'Acta en Verificacion. El acta que intenta ingresar aun se encuentra en estado de verificaion.'});
                        res.render('actas/seleccion', {errors});
                    }
                });
            }


            //     ActaDiputadosD1.findOne({colegio: colegio, municipio: municipio}, (err, documento) => {

            //         console.log(colegio);
            //         if (err) {
            //             return console.log("error: " + err);
            //         }
            //         if(!documento){
            //             console.log('No encontrado');
            //             console.log(documento);
            //             centro.nombre = colegioExists.nombre.toUpperCase();               
            //             res.render('actas/registro-d1', {nivelActa, colegio, centro, municipio});         
            //         } else {
            //             errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
            //             res.render('actas/seleccion', {errors});
            //         }
            //     })     
            // }; 


            if(nivelActa == 'diputadosD2'){


                ActaDiputadosD2Pre.findOne({colegio: colegio, municipio:municipio}, function (err, actaPre) {
                    if(!actaPre){
                        ActaDiputadosD2.findOne({colegio: colegio, municipio:municipio}, function (err, acta) {
                            if(!acta){
                                console.log('No encontrado');
                                console.log(acta);
                                centro.nombre = colegioExists.nombre.toUpperCase();
                                res.render('actas/registro-d2', {nivelActa, colegio, centro, municipio});
                            } else{
                                errors.push({text: 'Acta duplicada: El acta que intenta ingresar, ya ha sido ingresada anteriormente'});
                                res.render('actas/seleccion', {errors});
                            }
                        })
                    } else {
                        errors.push({text: 'Acta en Verificacion. El acta que intenta ingresar aun se encuentra en estado de verificaion.'});
                        res.render('actas/seleccion', {errors});
                    }
                });
            }



            //     ActaDiputadosD2.findOne({colegio: colegio, municipio: municipio}, (err, documento) => {

            //         console.log(colegio);
            //         if (err) {
            //             return console.log("error: " + err);
            //         }
            //         if(!documento){
            //             console.log('No encontrado');
            //             console.log(documento);
            //             centro.nombre = colegioExists.nombre.toUpperCase();
            //             res.render('actas/registro-d2', {nivelActa, colegio, centro, municipio});
            //         } else {
            //             errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
            //             res.render('actas/seleccion', {errors});
            //         }
            //     })     
            // }; 
    
                       
    } else {
        errors.push({text: 'No se encuentra el colegio, favor de ingresar un colegio correcto'});

    }

    if(errors.length > 0){
        res.render('actas/seleccion', {errors});
    } 

})
});

/*
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

        //   console.log(colegioExists);
        if(colegioExists){

            if(nivelActa == 'presidencial'){

                ActaPresidencial.findOne({colegio: colegio, municipio: municipio}, (err, documento) => {

                    console.log(colegio);
                    if (err) {
                        return console.log("error: " + err);
                    }
                    if(!documento){
                        console.log('No encontrado');
                        console.log(documento);
                        centro.nombre = colegioExists.nombre.toUpperCase();
                        res.render('actas/registro-p', {nivelActa, colegio, centro, municipio});
                    } else {
                        errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
                        res.render('actas/seleccion', {errors});
                    }
                })     
            }; 


            if(nivelActa == 'senatorial'){

                ActaSenatorial.findOne({colegio: colegio, municipio: municipio}, (err, documento) => {

                    console.log(colegio);
                    if (err) {
                        return console.log("error: " + err);
                    }
                    if(!documento){
                        console.log('No encontrado');
                        console.log(documento);
                        centro.nombre = colegioExists.nombre.toUpperCase();               
                        res.render('actas/registro-s', {nivelActa, colegio, centro, municipio});         
                    } else {
                        errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
                        res.render('actas/seleccion', {errors});
                    }
                })     
            }; 

            if(nivelActa == 'diputadosD1'){

                ActaDiputadosD1.findOne({colegio: colegio, municipio: municipio}, (err, documento) => {

                    console.log(colegio);
                    if (err) {
                        return console.log("error: " + err);
                    }
                    if(!documento){
                        console.log('No encontrado');
                        console.log(documento);
                        centro.nombre = colegioExists.nombre.toUpperCase();               
                        res.render('actas/registro-d1', {nivelActa, colegio, centro, municipio});         
                    } else {
                        errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
                        res.render('actas/seleccion', {errors});
                    }
                })     
            }; 


            if(nivelActa == 'diputadosD2'){

                ActaDiputadosD2.findOne({colegio: colegio, municipio: municipio}, (err, documento) => {

                    console.log(colegio);
                    if (err) {
                        return console.log("error: " + err);
                    }
                    if(!documento){
                        console.log('No encontrado');
                        console.log(documento);
                        centro.nombre = colegioExists.nombre.toUpperCase();
                        res.render('actas/registro-d2', {nivelActa, colegio, centro, municipio});
                    } else {
                        errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
                        res.render('actas/seleccion', {errors});
                    }
                })     
            }; 
    
                       
    } else {
        errors.push({text: 'No se encuentra el colegio, favor de ingresar un colegio correcto'});

    }

    if(errors.length > 0){
        res.render('actas/seleccion', {errors});
    } 

})
});

*/

router.post('/actas/ingresar/p', isAuthenticated, async (req, res) => {
    if(req.user.acceso === 'verificador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    const {centro, municipio, colegio, votos} = req.body;
    const digitador = req.user.name;
    let {votosNulos, boletasObservadas} = req.body;
    let votosValidos = 0;
    let iterate = 0;
    const errors = [];



    for (const prop in votos) {
        console.log(votos[prop] = parseInt(Object.values(votos)[iterate]));
        iterate++;
    }

    for (const prop in votos) {
        votosValidos += votos[prop];
      } 
    
    
    votosNulos = parseInt(votosNulos);
    boletasObservadas = parseInt(boletasObservadas);
    
    votosEmitidos = votosValidos + votosNulos;

    console.log(Object.values(votos)[0]);
    
    console.log(votos);
   
    ActaPresidencialPre.findOne({colegio: colegio, municipio:municipio}, function (err, actaPre) {
        if(!actaPre){
            ActaPresidencial.findOne({colegio: colegio, municipio:municipio}, function (err, acta) {
                if(!acta){
                    const newActa = new ActaPresidencialPre({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador});
                    console.log(newActa);
                    console.log(typeof colegio);

                    console.log('Votos Nulos: '+ votosNulos);
                    console.log('Boletas Observadas: ' + boletasObservadas);
                    console.log('votos Validos:' + votosValidos);
                    console.log('Votos Totales: ' + votosEmitidos);
    
                    newActa.save()
                    res.render('actas/seleccion');
                } else{
                    errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
                    res.render('actas/seleccion', {errors});
                }
            })
        } else {
            errors.push({text: 'Acta en Verificacion. El acta que intenta ingresar aun se encuentra en estado de verificaion.'});
            res.render('actas/seleccion', {errors});
        }
    });

    // const newActa = new ActaPresidencialPre({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador});
    // console.log(newActa);
    // console.log(typeof colegio);

    // console.log('Votos Nulos: '+ votosNulos);
    // console.log('Boletas Observadas: ' + boletasObservadas);
    // console.log('votos Validos:' + votosValidos);
    // console.log('Votos Totales: ' + votosEmitidos);
    
    

    // await newActa.save()

    // res.render('actas/seleccion');
});

router.post('/actas/ingresar/s', isAuthenticated, async (req, res) => {
    if(req.user.acceso === 'verificador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    const {centro, municipio, colegio, votos} = req.body;
    let {votosNulos, boletasObservadas} = req.body;
    const digitador = req.user.name;
    let votosValidos = 0;
    let iterate = 0;
    const errors = [];



    for (const prop in votos) {
        console.log(votos[prop] = parseInt(Object.values(votos)[iterate]));
        iterate++;
    }

    for (const prop in votos) {
        votosValidos += votos[prop];
      } 
    
    
    votosNulos = parseInt(votosNulos);
    boletasObservadas = parseInt(boletasObservadas);
    
    votosEmitidos = votosValidos + votosNulos;

    console.log(Object.values(votos)[0]);
    
    console.log(votos);
   

    ActaSenatorialPre.findOne({colegio: colegio, municipio:municipio}, function (err, actaPre) {
        if(!actaPre){
            ActaSenatorial.findOne({colegio: colegio, municipio:municipio}, function (err, acta) {
                if(!acta){
                    const newActa = new ActaSenatorialPre({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador});
                    console.log(newActa);
                    console.log(typeof colegio);

                    console.log('Votos Nulos: '+ votosNulos);
                    console.log('Boletas Observadas: ' + boletasObservadas);
                    console.log('votos Validos:' + votosValidos);
                    console.log('Votos Totales: ' + votosEmitidos);
    
                    newActa.save()
                    res.render('actas/seleccion');
                } else{
                    errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
                    res.render('actas/seleccion', {errors});
                }
            })
        } else {
            errors.push({text: 'Acta en Verificacion. El acta que intenta ingresar aun se encuentra en estado de verificaion.'});
            res.render('actas/seleccion', {errors});
        }
    });


    // const newActa = new ActaSenatorialPre({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador});
    // console.log(newActa);
    // console.log(typeof colegio);

    // console.log('Votos Nulos: '+ votosNulos);
    // console.log('Boletas Observadas: ' + boletasObservadas);
    // console.log('votos Validos:' + votosValidos);
    // console.log('Votos Totales: ' + votosEmitidos);
    // await newActa.save()

    // res.render('actas/seleccion');
});

router.post('/actas/ingresar/d1', isAuthenticated, async (req, res) => {
    if(req.user.acceso === 'verificador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    const {centro, municipio, colegio, votos} = req.body;
    const digitador = req.user.name;
    console.log(digitador);
    let {votosNulos, boletasObservadas} = req.body;
    let votosValidos = 0;
    let iterate = 0;
    const errors = [];



    for (const prop in votos) {
        console.log(votos[prop] = parseInt(Object.values(votos)[iterate]));
        iterate++;
    }

    for (const prop in votos) {
        votosValidos += votos[prop];
      } 
    
    
    votosNulos = parseInt(votosNulos);
    boletasObservadas = parseInt(boletasObservadas);
    
    votosEmitidos = votosValidos + votosNulos;

    console.log(Object.values(votos)[0]);
    
    console.log(votos);
   

    ActaDiputadosD1Pre.findOne({colegio: colegio, municipio:municipio}, function (err, actaPre) {
        if(!actaPre){
            ActaDiputadosD1.findOne({colegio: colegio, municipio:municipio}, function (err, acta) {
                if(!acta){
                    const newActa = new ActaDiputadosD1Pre({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador});
                    console.log(newActa);
                    console.log(typeof colegio);

                    console.log('Votos Nulos: '+ votosNulos);
                    console.log('Boletas Observadas: ' + boletasObservadas);
                    console.log('votos Validos:' + votosValidos);
                    console.log('Votos Totales: ' + votosEmitidos);
    
                    newActa.save()
                    res.render('actas/seleccion');
                } else{
                    errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
                    res.render('actas/seleccion', {errors});
                }
            })
        } else {
            errors.push({text: 'Acta en Verificacion. El acta que intenta ingresar aun se encuentra en estado de verificaion.'});
            res.render('actas/seleccion', {errors});
        }
    });



    // const newActa = new ActaDiputadosD1Pre({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador});
    // console.log(newActa);
    // console.log(typeof colegio);

    // console.log('Votos Nulos: '+ votosNulos);
    // console.log('Boletas Observadas: ' + boletasObservadas);
    // console.log('votos Validos:' + votosValidos);
    // console.log('Votos Totales: ' + votosEmitidos);
    // await newActa.save()

    // res.render('actas/seleccion');
});


router.post('/actas/ingresar/d2', isAuthenticated, async (req, res) => {
    if(req.user.acceso === 'verificador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    const {centro, municipio, colegio, votos} = req.body;
    let {votosNulos, boletasObservadas} = req.body;
    const digitador = req.user.name;
    let votosValidos = 0;
    console.log("Viendo los votos");
    console.log(votos);
    console.log("***********************");
    const errors = [];
  

//     for (const prop in votos) {
//         let iterate = 0;
        
//         for(let i = 0; i < 5; i++){
//             votos[prop][i] = Number(votos[prop][i]);
//             votosValidos =+ votos[prop][i];
//         }
//      // console.log(votos[prop] = parseInt(Object.values(votos)[iterate]));
//      // iterate++;
//    }
   
    // console.log(Object.values(votos));
//     let iterate = 0;
   for (const prop in votos) {
       let iterate = 0;
       for(let i = 0; i < 5; i++){
           votos[prop][i] = Number(votos[prop][i]);
           
       }
       console.log(votos[prop].reduce((a, b) => a + b));
           votosValidos = votosValidos + votos[prop].reduce((a, b) => a + b);
           
    
    // console.log(votos[prop] = parseInt(Object.values(votos)[iterate]));
    // iterate++;
  }
  
  
    votosEmitidos = votosValidos + Number(votosNulos);
    boletasObservadas = Number(boletasObservadas);


    ActaDiputadosD2Pre.findOne({colegio: colegio, municipio:municipio}, function (err, actaPre) {
        if(!actaPre){
            ActaDiputadosD2.findOne({colegio: colegio, municipio:municipio}, function (err, acta) {
                if(!acta){
                    const newActa = new ActaDiputadosD2Pre({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador});
                    
    
                    newActa.save()
                    res.render('actas/seleccion');
                } else{
                    errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
                    res.render('actas/seleccion', {errors});
                }
            })
        } else {
            errors.push({text: 'Acta en Verificacion. El acta que intenta ingresar aun se encuentra en estado de verificaion.'});
            res.render('actas/seleccion', {errors});
        }
    });



    // const newActa = new ActaDiputadosD2Pre({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador});
    // console.log(newActa);
    // await newActa.save()

    // res.render('actas/seleccion');
});


/***********************************    Virificador    ************************************************* */
/* const ActaPresidencial = require('../models/actasPresidencial');
const ActaSenatorial = require('../models/actasSenatorial');
const ActaDiputadosD1 = require('../models/actasDiputadosD1');
const ActaDiputadosD2 = require('../models/actasDiputadosD2');
 */

router.get('/actas/verificar', isAuthenticated, async(req, res) => {
    console.log(req.user.acceso);
    if(req.user.acceso === 'digitador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    // const actas = {
    //     actasP: {},
    //     actasS: {},
    //     actasD1: {},
    //     actasD2: {}
    // }

    const actasP = await ActaPresidencialPre.find().sort({colegio: 1});
    const actasS = await ActaSenatorialPre.find().sort({colegio: 1});
    const actasD1 = await ActaDiputadosD1Pre.find().sort({colegio: 1});
    const actasD2 = await ActaDiputadosD2Pre.find().sort({colegio: 1});

    res.render('actas/verificar', {actasP, actasS, actasD1, actasD2});

})





router.get('/actas/p/:idActa', isAuthenticated, async(req, res) => {
    console.log(req.user.acceso);
    if(req.user.acceso === 'digitador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    
    ActaPresidencialPre.findById(req.params.idActa, function (err, acta) {
        if (err) {
            return console.log("error: " + err);
          }
        console.log(acta);
        if(acta){
            res.render('actas/verificar-p', {acta});
        }
    });
});


router.get('/actas/s/:idActa', isAuthenticated, async(req, res) => {
    console.log(req.user.acceso);
    if(req.user.acceso === 'digitador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    ActaSenatorialPre.findById(req.params.idActa, function (err, acta) {
        if (err) {
            return console.log("error: " + err);
          }
        console.log(acta);
        if(acta){
            res.render('actas/verificar-s', {acta});
        }
    });
});


router.get('/actas/d1/:idActa', isAuthenticated, async(req, res) => {
    console.log(req.user.acceso);
    if(req.user.acceso === 'digitador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    ActaDiputadosD1Pre.findById(req.params.idActa, function (err, acta) {
        if (err) {
            return console.log("error: " + err);
          }
        console.log(acta);
        if(acta){
            res.render('actas/verificar-d1', {acta});
        }
    });
});


router.get('/actas/d2/:idActa', isAuthenticated, async(req, res) => {
    console.log(req.user.acceso);
    if(req.user.acceso === 'digitador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    ActaDiputadosD2Pre.findById(req.params.idActa, function (err, acta) {
        if (err) {
            return console.log("error: " + err);
          }
        console.log(acta);
        if(acta){
            res.render('actas/verificar-d2', {acta});
        }
    });
});


router.post('/actas/actualizar/p', isAuthenticated, async (req, res) => {
    console.log(req.user.acceso);
    if(req.user.acceso === 'digitador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    const {centro, municipio, colegio, votos, digitador} = req.body;
    let {votosNulos, boletasObservadas} = req.body;
    let votosValidos = 0;
    let iterate = 0;
    const verificador = req.user.name
    const errors = [];


    for (const prop in votos) {
        console.log(votos[prop] = parseInt(Object.values(votos)[iterate]));
        iterate++;
    }

    for (const prop in votos) {
        votosValidos += votos[prop];
      } 
    
    
    votosNulos = parseInt(votosNulos);
    boletasObservadas = parseInt(boletasObservadas);
    
    votosEmitidos = votosValidos + votosNulos;

    console.log(Object.values(votos)[0]);
    
    console.log(votos);
   


    ActaPresidencial.findOne({colegio: colegio, municipio:municipio}, async function (err, acta) {
        if(!acta){
            const newActa = new ActaPresidencial({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador, verificador});
            console.log(newActa);
            console.log(typeof colegio);

            console.log('Votos Nulos: '+ votosNulos);
            console.log('Boletas Observadas: ' + boletasObservadas);
            console.log('votos Validos:' + votosValidos);
            console.log('Votos Totales: ' + votosEmitidos);
            newActa.save();

            await ActaPresidencialPre.findOneAndDelete({centro: centro, municipio: municipio, colegio: colegio});
            res.redirect('/actas/verificar');
        } else{
            errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
            res.render('actas/verificar', {errors});
        }
    })



    // const newActa = new ActaPresidencial({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador, verificador});
    // console.log(newActa);
    // console.log(typeof colegio);

    // console.log('Votos Nulos: '+ votosNulos);
    // console.log('Boletas Observadas: ' + boletasObservadas);
    // console.log('votos Validos:' + votosValidos);
    // console.log('Votos Totales: ' + votosEmitidos);
    // await newActa.save()

    // await ActaPresidencialPre.findOneAndDelete({centro: centro, municipio: municipio, colegio: colegio});
    // res.redirect('/actas/verificar');
});


router.post('/actas/actualizar/s', isAuthenticated, async (req, res) => {
    console.log(req.user.acceso);
    if(req.user.acceso === 'digitador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    const {centro, municipio, colegio, votos, digitador} = req.body;
    let {votosNulos, boletasObservadas} = req.body;
    let votosValidos = 0;
    let iterate = 0;
    const verificador = req.user.name
    const errors = [];



    for (const prop in votos) {
        console.log(votos[prop] = parseInt(Object.values(votos)[iterate]));
        iterate++;
    }

    for (const prop in votos) {
        votosValidos += votos[prop];
      } 
    
    
    votosNulos = parseInt(votosNulos);
    boletasObservadas = parseInt(boletasObservadas);
    
    votosEmitidos = votosValidos + votosNulos;

    console.log(Object.values(votos)[0]);
    
    console.log(votos);
   

    ActaSenatorial.findOne({colegio: colegio, municipio:municipio}, async function (err, acta) {
        if(!acta){
            const newActa = new ActaSenatorial({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador, verificador});
            console.log(newActa);
            console.log(typeof colegio);
            console.log('Votos Nulos: '+ votosNulos);
            console.log('Boletas Observadas: ' + boletasObservadas);
            console.log('votos Validos:' + votosValidos);
            console.log('Votos Totales: ' + votosEmitidos);
            await newActa.save()
            await ActaSenatorialPre.findOneAndDelete({centro: centro, municipio: municipio, colegio: colegio});
            res.redirect('/actas/verificar');
        } else{
            errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
            res.render('actas/verificar', {errors});
        }
    })



    // const newActa = new ActaSenatorial({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador, verificador});
    // console.log(newActa);
    // console.log(typeof colegio);

    // console.log('Votos Nulos: '+ votosNulos);
    // console.log('Boletas Observadas: ' + boletasObservadas);
    // console.log('votos Validos:' + votosValidos);
    // console.log('Votos Totales: ' + votosEmitidos);
    // await newActa.save()

    // await ActaSenatorialPre.findOneAndDelete({centro: centro, municipio: municipio, colegio: colegio});
    // res.redirect('/actas/verificar');
});


router.post('/actas/actualizar/d1', isAuthenticated, async (req, res) => {
    console.log(req.user.acceso);
    if(req.user.acceso === 'digitador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    const {centro, municipio, colegio, votos, digitador} = req.body;
    let {votosNulos, boletasObservadas} = req.body;
    let votosValidos = 0;
    let iterate = 0;
    const verificador = req.user.name
    const errors = [];



    for (const prop in votos) {
        console.log(votos[prop] = parseInt(Object.values(votos)[iterate]));
        iterate++;
    }

    for (const prop in votos) {
        votosValidos += votos[prop];
      } 
    
    
    votosNulos = parseInt(votosNulos);
    boletasObservadas = parseInt(boletasObservadas);
    
    votosEmitidos = votosValidos + votosNulos;

    console.log(Object.values(votos)[0]);
    
    console.log(votos);
   
    
    ActaDiputadosD1.findOne({colegio: colegio, municipio:municipio}, async function (err, acta) {
        if(!acta){
            const newActa = new ActaDiputadosD1({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador, verificador});
            console.log(newActa);
            console.log(typeof colegio);

            console.log('Votos Nulos: '+ votosNulos);
            console.log('Boletas Observadas: ' + boletasObservadas);
            console.log('votos Validos:' + votosValidos);
            console.log('Votos Totales: ' + votosEmitidos);
            await newActa.save()

            await ActaDiputadosD1Pre.findOneAndDelete({centro: centro, municipio: municipio, colegio: colegio});
            res.redirect('/actas/verificar');
        } else{
            errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
            res.render('actas/verificar', {errors});
        }
    })



    // const newActa = new ActaDiputadosD1({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador, verificador});
    // console.log(newActa);
    // console.log(typeof colegio);

    // console.log('Votos Nulos: '+ votosNulos);
    // console.log('Boletas Observadas: ' + boletasObservadas);
    // console.log('votos Validos:' + votosValidos);
    // console.log('Votos Totales: ' + votosEmitidos);
    // await newActa.save()

    // await ActaDiputadosD1Pre.findOneAndDelete({centro: centro, municipio: municipio, colegio: colegio});
    // res.redirect('/actas/verificar');
});


router.post('/actas/actualizar/d2', isAuthenticated, async (req, res) => {
    console.log(req.user.acceso);
    if(req.user.acceso === 'digitador'){
        res.redirect('/panel')
    }
    if(req.user.acceso === 'observador'){
        res.redirect('/panel')
    }
    const {centro, municipio, colegio, votos, digitador} = req.body;
    let {votosNulos, boletasObservadas} = req.body;
    let votosValidos = 0;
    let iterate = 0;
    const verificador = req.user.name
    const errors = [];



    for (const prop in votos) {
        let iterate = 0;
        for(let i = 0; i < 5; i++){
            votos[prop][i] = Number(votos[prop][i]);
            
        }
        console.log(votos[prop].reduce((a, b) => a + b));
            votosValidos = votosValidos + votos[prop].reduce((a, b) => a + b);
            
     
     
   }

   
    votosNulos = parseInt(votosNulos);
    boletasObservadas = parseInt(boletasObservadas);
    
    votosEmitidos = votosValidos + votosNulos;

    console.log(Object.values(votos)[0]);
    
    console.log(votos);
   

    ActaDiputadosD2.findOne({colegio: colegio, municipio:municipio}, async function (err, acta) {
        if(!acta){
            const newActa = new ActaDiputadosD2({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador, verificador});
            console.log(newActa);
            console.log(typeof colegio);
        
            console.log('Votos Nulos: '+ votosNulos);
            console.log('Boletas Observadas: ' + boletasObservadas);
            console.log('votos Validos:' + votosValidos);
            console.log('Votos Totales: ' + votosEmitidos);
            await newActa.save()
        
            await ActaDiputadosD2Pre.findOneAndDelete({centro: centro, municipio: municipio, colegio: colegio});
            res.redirect('/actas/verificar');
        } else{
            errors.push({text: 'Acta duplicada: El acta que intenta ingresa, ya ha sido ingresada anteriormente'});
            res.render('actas/verificar', {errors});
        }
    })



    // const newActa = new ActaDiputadosD2({centro, municipio, colegio, votos, votosValidos, votosNulos, votosEmitidos, boletasObservadas, digitador, verificador});
    // console.log(newActa);
    // console.log(typeof colegio);

    // console.log('Votos Nulos: '+ votosNulos);
    // console.log('Boletas Observadas: ' + boletasObservadas);
    // console.log('votos Validos:' + votosValidos);
    // console.log('Votos Totales: ' + votosEmitidos);
    // await newActa.save()

    // await ActaDiputadosD2Pre.findOneAndDelete({centro: centro, municipio: municipio, colegio: colegio});
    // res.redirect('/actas/verificar');
});



module.exports = router;