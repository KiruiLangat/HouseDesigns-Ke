import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import dotenv from 'dotenv';

dotenv.config();

const consumerKey = process.env.WC_CONSUMER_KEY;
const consumerSecret = process.env.WC_CONSUMER_SECRET;

const api = new WooCommerceRestApi({
  url: 'https://housedesigns.co.ke/CMS',
  consumerKey: consumerKey,
  consumerSecret: consumerSecret,
  version: 'wc/v3'
});

export const fetchFromWooCommerce = async (endpoint, params = {}, method = 'GET', body = null) => {
  params.fields = 'id,name,slug,price,images,attributes,options,short_description,description,categories,variations,thumbnails';

  try {
    const response = await api.get(endpoint, params);
    if (!response) {
      throw new Error(`Error fetching ${endpoint}: No response`);
    }
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error.response ? error.response.data : error.message);
    throw error;
  }
};