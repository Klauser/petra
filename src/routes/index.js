const router = require('express').Router();

const Centro = require('../models/centros');
const ActaPresidencial = require('../models/actasPresidencial');
const ActaSenatorial = require('../models/actasSenatorial');
const ActaDiputadosD2 = require('../models/actasDiputadosD2');


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


// DASHBOARD SAN PEDRO DE MACORIS -------------------------------------


module.exports = router;