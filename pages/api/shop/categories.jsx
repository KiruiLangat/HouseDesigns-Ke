import { fetchFromWooCommerce } from '../../../services/fetchWooCommerce';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  try {
    const categories = await fetchFromWooCommerce('products/categories', { per_page: 100 });
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
}