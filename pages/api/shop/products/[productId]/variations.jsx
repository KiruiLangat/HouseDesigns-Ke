import { fetchFromWooCommerce } from '../../../../../services/fetchWooCommerce';

export default async function handler(req, res) {
  const { productId } = req.query;
  try {
    const variations = await fetchFromWooCommerce(`products/${productId}/variations`);
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.json(variations);
  } catch (error) {
    res.status(500).send(error.message);
  }
}