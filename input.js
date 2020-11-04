let connection;
const { MESSAGE_HELLO, MESSAGE_LAUGH, MESSAGE_BYE, MESSAGE_SORRY } = require('./constants');

const setupInput = (conn) => {
  connection = conn;
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

  switch (key) {
    case '\u0003':
      process.exit();
    case 'w':
      connection.write('Move: up');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case '1':
      connection.write(`Say: ${MESSAGE_HELLO}`);
      break;
    case '2':
      connection.write(`Say: ${MESSAGE_LAUGH}`);
      break;
    case '3':
      connection.write(`Say: ${MESSAGE_BYE}`);
      break;
    case '4':
      connection.write(`Say: ${MESSAGE_SORRY}`);
      break;
    default:
      console.log("Not a valid input");
  }
}

module.exports = setupInput;