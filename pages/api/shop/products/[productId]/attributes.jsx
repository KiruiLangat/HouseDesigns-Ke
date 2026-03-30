import { fetchFromWooCommerce } from '../../../../../services/fetchWooCommerce';

export default async function handler(req, res) {
  const { productId } = req.query;
  try {
    const attributes = await fetchFromWooCommerce(`products/${productId}/attributes`);
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.json(attributes);
  } catch (error) {
    res.status(500).send(error.message);
  }
}