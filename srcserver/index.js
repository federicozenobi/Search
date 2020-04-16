const express = require('express');
const cors = require('cors')
const app = express().use("*",cors());
const morgan = require('morgan')


//Seting
app.set('port',process.env.PORT || 3001);

//MW
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/',require('./routes/routes.js'))

//Start
app.listen(3001, app.get('port'),() =>{
    console.log(`Server on port${app.get('port')}`);
});

