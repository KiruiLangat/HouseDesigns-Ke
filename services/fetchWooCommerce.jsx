import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const consumerKey = process.env.WC_CONSUMER_KEY;
const consumerSecret = process.env.WC_CONSUMER_SECRET;

export const fetchFromWooCommerce = async (endpoint, params = {}, method = 'GET', body = null) => {
  const url = new URL(`https://housedesigns.co.ke/CMS/wp-json/wc/v3/${endpoint}`);
  const headers = new fetch.Headers();
  headers.append('Authorization', 'Basic ' + Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64'));
  headers.append('Content-Type', 'application/json');

  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });
    if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};