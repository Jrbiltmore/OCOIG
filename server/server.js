
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const csrfProtection = require('./middleware/csrf').csrfProtection;
const csrfErrorHandler = require('./middleware/csrf').csrfErrorHandler;
const app = express();
const port = 3000;

const config = require('./config');

app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfProtection);
app.use(csrfErrorHandler);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/grants', require('./routes/grants'));

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Welcome to the Inspector General Office API');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
