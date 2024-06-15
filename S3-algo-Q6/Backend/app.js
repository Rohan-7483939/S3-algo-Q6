require("module-alias/register");
const Server = require("./config/server");
const server = new Server();
server.run(8081);
