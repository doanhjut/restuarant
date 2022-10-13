const http = require("http");
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const initSocket = require('./socket/index.js');
const socketUtils = require('./utils/socketUtils.js');
let server  = http.createServer(app);;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
  // server = app.listen(config.port, () => {
  //   logger.info(`Listening to port ${config.port}`);
  // });
  const port = process.env.PORT || 6500;
  server.listen(port, () => {

    console.log(`App running on port ${port}...`);
  })
});
const io = socketUtils.sio(server);

// socketUtils.connection(io);
app.set('socketio', io);
initSocket(io);
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
