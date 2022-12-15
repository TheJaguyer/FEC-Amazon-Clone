/* ==================== Dependencies ==================== */

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const config = require('./config.js');

/* ==================== Initialize Express ==================== */

const app = express();
const port = config[process.env.NODE_ENV].port;

/* ==================== Initialize Pool ==================== */

const connectionString = config[process.env.NODE_ENV].connectionString;
const pool = new Pool({ connectionString: connectionString });
pool.connect();

/* ==================== Middleware ==================== */

app.use(cors());
app.use(express.json());

/* ==================== Routes ==================== */

/* ========== Read ========== */

// Get full tables
app.get('/Amazon/:table', (req, res) => {
  pool.query(`SELECT * FROM ${req.params.table}`).then((result) => {
    res.send(result.rows);
    console.log(result.rows);
  });
});


app.get('/recs', (req, res)=>{
  client.query('SELECT * FROM recommendations' )
  .then((result)=>{
      res.status(200).send(result.rows);
  })
  .catch((err)=>{
      res.status(400).send('Cant GET data')
  })
});

/* ==================== Listener ==================== */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


