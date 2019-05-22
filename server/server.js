const express = require('express');
const cors = require('cors');
const instockroutes = require('./routes/instockroutes');
const app = express();
const port = 8080;
const url = `http://localhost:8080`;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('assets'));
app.use(cors());

app.listen(port, () => {
    console.log(`listening on ${url}`);
});