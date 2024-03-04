// 
const express = require('express');
const PORT = 3001;
const api = require('./routes/index.js')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(api);

app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`);
})