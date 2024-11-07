import pool from '../../services/MySQLConnector';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, number, message } = req.body;
    pool.query('INSERT INTO contactForm (Name, Email, Number, Message) VALUES (?, ?, ?, ?)', [name, email, number, message], (error, _results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Form submitted successfully' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}