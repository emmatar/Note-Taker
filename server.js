// Required constants to access express and the routes index page
const express = require('express');
const PORT = 3001;
const routes = require('./routes');
// init express
const app = express();

// Declaring middleware for express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);
// Listening for incomming connections on specified port
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`);
});

