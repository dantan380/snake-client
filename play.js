const {createConnection} = require('./client');
const {setupInput} = require('./input');

console.log("Connecting ...");



setupInput(createConnection());
