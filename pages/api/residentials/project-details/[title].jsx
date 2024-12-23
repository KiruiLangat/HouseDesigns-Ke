import pool from '../../../../services/MySQLConnector';

export default function handler(req, res) {
  const { title } = req.query;

  if (req.method === 'GET') {
    pool.query('SELECT * FROM projectDescription WHERE title = ?', [title], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
      } else {
        console.log(results);
        res.json(results[0]);
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}