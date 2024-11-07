import { fetchFromWooCommerce } from '../../../services/fetchWooCommerce';

export default async function handler(req, res) {
  const { categoryId } = req.query;
  const params = categoryId ? { category: categoryId } : {};
  try {
    const products = await fetchFromWooCommerce('products', params);
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
}