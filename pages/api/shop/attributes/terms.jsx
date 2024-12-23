import { fetchFromWooCommerce } from '../../../../services/fetchWooCommerce';

export default async function handler(req, res) {
  const { name } = req.query;
  try {
    const attributes = await fetchFromWooCommerce('products/attributes');
    const attribute = attributes.find(attr => attr.name === name);
    if (attribute) {
      const terms = await fetchFromWooCommerce(`products/attributes/${attribute.id}/terms`);
      res.json(terms);
    } else {
      res.status(404).send('Attribute not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}