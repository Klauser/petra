const router = require('express').Router();

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


router.get('/panel', isAuthenticated, (req, res) => {
    if(req.user.acceso === 'digitador'){
        res.redirect('/actas/seleccion');
    }else if (req.user.acceso === 'verificador'){
        res.redirect('/acstas/verificar');
    }else if (req.user.acceso === 'observador'){
        res.redirect('/dashboard');
    }else if (req.user.acceso === 'administrador'){
        res.render('panel/index');
    }else {
        res.redirect('/');
    }

    
});



module.exports = router;