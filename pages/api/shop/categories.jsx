import { fetchFromWooCommerce } from '../../../services/fetchWooCommerce';

export default async function handler(req, res) {
  try {
    const categories = await fetchFromWooCommerce('products/categories', { per_page: 100 });
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
}