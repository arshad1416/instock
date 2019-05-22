const express = require('express');
const getInvItem = require('./getInvItemId/getInvItemId');
const app = express();
const port = 8080;
const host = `http://localhost:${port}`;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/inventory', getInvItem);

app.listen(port, () => {
    console.log(`listening on ${host}`);
})
