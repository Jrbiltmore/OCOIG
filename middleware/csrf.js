
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const csrfErrorHandler = (err, req, res, next) => {
  if (err.code !== 'EBADCSRFTOKEN') return next(err);

  // handle CSRF token errors here
  res.status(403).json({ error: 'Invalid CSRF token' });
};

module.exports = { csrfProtection, csrfErrorHandler };
