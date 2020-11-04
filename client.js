const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.on('connect', () => {
    console.log("Successfully connected to server");
    conn.write("Name: SY");
  })

  conn.on('data', (data) => {
     console.log("Server: ", data);
  })

  conn.setEncoding('utf8');

  return conn;
}

module.exports = connect;