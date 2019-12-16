const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT

app.use(express.static('public'));

app.listen(port, function() {
    console.log('listening')
});