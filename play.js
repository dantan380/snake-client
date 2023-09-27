const connect = require('./client');

console.log("Connecting ...");
connect();

const handleUserInput = function (key) {
    if (key === '\u0003'){
        process.exit();
    }
  }

const setupInput = function () {
    const stdin = process.stdin;
    stdin.on("data", handleUserInput);
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };

setupInput();
