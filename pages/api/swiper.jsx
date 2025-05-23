import pool from '../../services/MySQLConnector';

export default function handler(req, res) {
  if (req.method === 'GET') {
    pool.query('SELECT * FROM SwiperProjects ORDER BY id DESC', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', message: error.sqlMessage });
      } else {
        res.json(results);
      }
    })
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}