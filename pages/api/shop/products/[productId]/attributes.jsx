import { fetchFromWooCommerce } from '../../../../../services/fetchWooCommerce';

export default async function handler(req, res) {
  const { productId } = req.query;
  try {
    const attributes = await fetchFromWooCommerce(`products/${productId}/attributes`);
    res.json(attributes);
  } catch (error) {
    res.status(500).send(error.message);
  }
}