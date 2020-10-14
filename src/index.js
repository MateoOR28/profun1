const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const methodOverride = require('method-override');
const session = require('express-session');

//inisialisaciones 
const app = express();
require ('./database');

//configuracionses
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    LayoutsDir: path.join(app.get('views'), 'Layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//peticiones antes de que llegen al servidor
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use(session({
   secret: 'mysecretapp',
   resave: true,
   saveUninitialized: true
}))

//variables globales 

//rutas
app.use(require('./routes/index'));
app.use(require('./routes/historia'));
app.use(require('./routes/users'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//el srver escucha
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
});