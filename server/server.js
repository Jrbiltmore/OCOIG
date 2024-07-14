
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const config = require('./config');

app.use(bodyParser.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/grants', require('./routes/grants'));

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
