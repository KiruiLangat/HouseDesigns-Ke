import { fetchFromWooCommerce } from '../../../services/fetchWooCommerce';

export default async function handler(req, res) {
  const { user } = req.body;
  try {
    const response = await fetchFromWooCommerce('customers', {}, 'POST', user);
    res.json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
}