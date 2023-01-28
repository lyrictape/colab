const HServer  = require("@hocuspocus/server")

const server = HServer.Server.configure({
  port: 80,
})

server.listen()