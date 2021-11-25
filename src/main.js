const app = require('./app');
const serverConfig = require('./config/server.config');
const Server = require('./server');


const server = new Server(app, serverConfig.getPort(), serverConfig.getValue('MONGODB_URI'));

server.listen();