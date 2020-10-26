const express = require('express');
const winston = require('winston');
// const config = require('config');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const logger = require('./logger');
const connect = require('./connect');
const app = express();
app.use(express.json());
// app.use(helmet());
// if(app.get('env' === 'development')){
//     app.use(morgan('tiny'));
//     console.log('Morgan enabled...');
// }
// app.use(morgan('tiny'));
// app.use(logger);
require('./startup/prod')(app);
// Application aname and environment
// console.log('Application name:',config.get('name'));
app.get('/',(req,res) => {
    res.send('Hello World!');
});
// to prevent favicon.ico error
app.get('/favicon.ico', (req, res) => res.status(204));

const port = process.env.PORT || 9092;
const server  = app.listen(port, () => winston.info(`Server is running on port ${port}`));
module.exports = server;