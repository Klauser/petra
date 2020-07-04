const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const SocketIO = require('socket.io');
const flash = require('connect-flash');
const passport = require('passport');



// Initialization
const app = express();
require('./database');
require('./config/passport');

app.set('views', path.join(__dirname, 'views'));
const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',

    helpers: {
        ifEquals: function(a, b, opts) {
            if (a === b) {
                return opts.fn(this);
                
            } else {
                return opts.inverse(this);
            }
        },
        increment: function(value){
            return parseInt(value) + 1;
        },
        commaNumber: function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
})
// Settings
app.set('port', process.env.PORT || 3000);

app.engine(".hbs", hbs.engine);
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'prm2020',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())

// Global Variable
app.use((req, res, next) => {
    res.locals.succes_msg = req.flash('succes_msg');
    res.locals.errors_msg = req.flash('errors_mgs');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

// Routes 
app.use(require('./routes/index'));
app.use(require('./routes/actas'));
app.use(require('./routes/centros'));
app.use(require('./routes/users'));
app.use(require('./routes/dashboard'));
app.use(require('./routes/panel'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

//  Server is listen
const server = app.listen(app.get('port'), () => {
    console.log('Server runnin on port: ', app.get('port'))
});


// websockets
const io = SocketIO(server);

io.on('connection', (socket) => {
    socket.on('chart:update', data => {
        console.log(data);
        io.sockets.emit('chart:update', data);
    })
})