import { fetchFromWooCommerce } from '../../../services/fetchWooCommerce';

export default async function get(req, res) {
  const { categoryId } = req.query;
  const params = categoryId ? { category: parseInt(categoryId, 10) } : {};
  if (categoryId && isNaN(params.category)) {
    return res.status(400).json({ error: 'Invalid category ID' });
  }
  try {
    const products = await fetchFromWooCommerce('products', params);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}