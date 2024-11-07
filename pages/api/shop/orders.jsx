import { fetchFromWooCommerce } from '../../../services/fetchWooCommerce';

export default async function handler(req, res) {
  const { order } = req.body;
  try {
    const response = await fetchFromWooCommerce('orders', {}, 'POST', order);
    res.json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
}