const router = require('express').Router();
const Centro = require('../models/centros');
const User = require('../models/users');

const passport = require('passport');

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


router.get('/users/seleccion', isAuthenticated, (req, res) => {
    res.render('users/seleccion');
});

router.post('/users/seleccion', isAuthenticated, (req, res) => {
   const {accion} =req.body; 
    if (accion === 'ingresar'){
        res.redirect('/users/signup');
    }else if(accion === 'listar'){
        res.redirect('/users/listar');
    }
});

router.get('/users/listar', isAuthenticated, async (req, res) => {
    const users = await User.find().sort({name: 1});
    res.render('users/listar', {users});
});

router.get('/users/signup',  (req, res) => {
    res.render('users/signup');
});

router.post('/users/signup',  async(req, res) => {
    const {name, password, confirm_password, acceso} = req.body;
    const errors = [];
    if(name <= 0){
        errors.push({text: 'Por favor inserte un nombre'});
    }
    if(password <= 0){
        errors.push({text: 'Por favor inserte un password'});
    }
    if(confirm_password <= 0){
        errors.push({text: 'Por favor confirme password'});
    }
    if(password != confirm_password){
        errors.push({text: 'Los passwords no coinciden'});
    }
    if(password < 5){
        errors.push({text: 'El password debe ser mayor a 5 caracteres'});
    }
    if(errors.length > 0 ){
        res.render('users/signup', {errors, name, password, confirm_password, acceso});
    }else {
        const nameUser = await User.findOne({name: name});
        if(nameUser){
            console.log('encontrado');
            req.flash('errors_msg', 'El usuario ya existe');
            res.redirect('/users/signup');
        } else {
        const newUser = new User({name, password, acceso});
        newUser.password = await newUser.encryptPassword(password);
        newUser.save();
        console.log('jodido');
        req.flash('succes_msg', 'Has sido registado satisfactoriamente');
        res.redirect('/users/signin');
        }
    }
});

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/panel',
    failureRedirect: '/users/signin',
    failureFlash: true
}));

router.get('/users/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

router.delete('/users/:idUser', isAuthenticated, async(req, res) => {
    User.findOneAndDelete({ _id: req.params.idUser }, function (err) {
        if (err) {
            return console.log("error: " + err);
            res.send('Hubo un error');
          } else {
            console.log(`el usuario ${req.params.id} ha sido elimando`);
            res.redirect('/users/listar');
        }
    }); 
})

router.get('/users/:idUser', isAuthenticated, async(req, res) => {
    User.findById(req.params.idUser, function (err, user) {
        if (err) {
            return console.log("error: " + err);
          }
        if(user){
            res.render('users/editar', {user});
        }
    });
});

router.put('/users/:idUser', isAuthenticated, async(req, res) => {
    let {name, password, confirm_password, acceso} = req.body;
    const id = req.params.idUser
    User.findByIdAndUpdate(id, {name: name, password: password, acceso: accseso}, function (err) {
        if (err) {
            return console.log("error: " + err);
            res.send('Hubo un error');
          } else {
            console.log(`el usuario ${req.params.id} ha sido actualizado`);
            res.redirect('/users/listar');
        }
    }); 
});


module.exports = router;