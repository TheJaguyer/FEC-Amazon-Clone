const express = require('express');
const cors = require ('cors');
const {Client} = require('pg');
const app = express();

const config = require('./config.js')[process.env.NODE_ENV || 'dev'];
const PORT = config.port;

const client = new Client({
    connectionString : config.connectionString
});

client.connect();

app.use(cors());
app.use(express.json());


app.get('/amazon', (req, res)=>{
    client.query('SELECT * FROM recommendations' )
    .then((result)=>{
        res.status(200).send(result.rows);
    })
    .catch((err)=>{
        res.status(400).send('Cant GET data')
    })
});









app.get('/', (req, res)=>{
    res.send('Hello from API')
})

app.listen(PORT, () =>{
    console.log(`api on port ${PORT}`)
});