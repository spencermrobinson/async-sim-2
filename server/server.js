require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const checkForSession = require('./middleware/checkForSession.js');
const ctrl = require('./controllers/controller.js');



const{
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING,
}=process.env;

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
})
.catch((err) => console.log(err));

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use( checkForSession );

app.post(`/api/createUser`, ctrl.createUser);
app.post(`/api/loginUser`, ctrl.loginUser );
app.post('/api/logout', ctrl.logout );
app.post(`/api/createProperty`, ctrl.createProperty );
app.get(`/api/getProperties`, ctrl.getProperties);





app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`));