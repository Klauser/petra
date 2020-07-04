const mongosse = require('mongoose');

// mongosse.connect('mongodb://localhost/elecciones2020', {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })
// *********************************************************

mongosse.connect('mongodb+srv://klauser:Juanchi16@sandbox-evzqq.mongodb.net/elecciones2020?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));