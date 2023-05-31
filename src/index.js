const express = require('express');
const app = express();
const morgan = require('morgan');

//config
app.set('port', 3000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/juegos',require('./rutas/rutas'));

//empezando serv
app.listen(app.get('port'));
console.log("mi primer servidor");