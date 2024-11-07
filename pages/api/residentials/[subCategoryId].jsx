import pool from '../../../services/MySQLConnector';

export default function handler(req, res) {
  const { subCategoryId } = req.query;

  if (req.method === 'GET') {
    pool.query('SELECT * FROM projects WHERE sub_category_id = ?', [subCategoryId], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}