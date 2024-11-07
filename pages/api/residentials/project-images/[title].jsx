import pool from '../../../../services/MySQLConnector';

export default function handler(req, res) {
  const { title } = req.query;

  if (req.method === 'GET') {
    pool.query('SELECT projects_id FROM projectDescription WHERE title = ?', [title], (error, results) => {
      if (error) {
        res.status(500).send(error);
      } else if (results[0] === undefined) {
        res.status(404).send('Project not found');
      } else {
        const projectId = results[0].projects_id;
        pool.query('SELECT image_url FROM images WHERE projects_id = ?', [projectId], (error, results) => {
          if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            const images = results.map(row => row.image_url);
            res.json(images);
          }
        });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}