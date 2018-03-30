require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');



const{
    SERVER_PORT,
    SECRET,
    CONNECTION_STRING,
}=process.env;

const app = express();

app.use(bodyParser.json);

massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
})
.catch((err) => console.log(err));


app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`));