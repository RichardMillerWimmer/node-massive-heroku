require('dotenv').config();

const express = require('express');
const app = express();
// const port = 5050;
const massive = require('massive');
const ctrl = require('./controller');
// console.log(ctrl)

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.get('/api/items', ctrl.getItems);
app.post('/api/items', ctrl.addItem);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`db connected and server is jamming on ${SERVER_PORT}`))
}).catch(error => console.log(error));


app.use(express.json());

// Moved into massive() to get a console visual its working 
// app.listen(SERVER_PORT, () => console.log(`server is jamming on ${SERVER_PORT}`))