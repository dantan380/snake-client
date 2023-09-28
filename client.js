const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const createConnection = function () {
  const conn = net.createConnection({
    IP, // IP address here,
    PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
  });

  conn.on("connect", () => {
    conn.write("Name: DAN");
  });

  return conn;
};

module.exports = {createConnection};