const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public/assets', express.static(__dirname + '/public/assets'));

require('./RouteFiles/API-route')(app);
require('./RouteFiles/Html-routes')(app);

app.listen(PORT, function() {
    console.log('Application listening localhost' + PORT);
});


