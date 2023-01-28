const HServer  = require("@hocuspocus/server")

const server = HServer.Server.configure({
  port: 5871,
})

server.listen()