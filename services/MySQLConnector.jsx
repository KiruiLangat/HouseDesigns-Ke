import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db_config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  debug: true,
  connectionLimit: 10,
  queueLimit: 0,
  waitForConnections: true,
  connectTimeout: 30000,
  acquireTimeout: 30000,
  timeout: 30000
};

let pool;

function handleDisconnect() {
  pool = mysql.createPool(db_config);

  pool.on('connection', function (connection) {
    console.log('MySQL pool connected: threadId ' + connection.threadId);
  });

  pool.on('error', function (err) {
    console.error('Unexpected error on the database connection', err);
    if (err.code === 'PROTOCOL_SEQUENCE_TIMEOUT') {
      console.error('The connection to the MySQL server timed out. Please check your network connection and the server status.');
    }
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET') {
      console.error('Database connection was closed.');
      handleDisconnect();
    } else {
      pool.end((endErr) => {
        if (endErr) {
          console.error('Error ending the pool:', endErr);
        }
        handleDisconnect();
      });
    }
  });
}

handleDisconnect();

process.on('uncaughtException', function (err) {
  console.error('Caught exception: ', err);
  process.exit(-1);
});

export default pool;