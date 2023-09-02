const { logEvents } = require('./logEvent'); // Fix the typo here

const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}: ${err.message}`, 'errLog.txt'); // Use the correct function name here
  console.error(err.stack);
  res.status(500).send(err.message);
};

module.exports = errorHandler;
