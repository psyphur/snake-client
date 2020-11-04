const connect = require('./client');

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true); // allows for use of ctrl + c
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  })
  return stdin;
}

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
}

console.log("Connecting...");
connect();
setupInput();