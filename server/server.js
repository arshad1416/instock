const express = require('express');
const cors = require('cors');
const inStockRoutes = require('./routes/instockroutes');
const app = express();
const port = 8080;
const host = `http://localhost:${port}`;


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/warehouses', inStockRoutes);
app.use('/inventory', inStockRoutes);
app.use('/newwarehouses', inStockRoutes);

app.use('/', inStockRoutes)

app.listen(port, () => {
    console.log(`listening on ${host}`);
})

