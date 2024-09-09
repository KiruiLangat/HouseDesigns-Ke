import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 3001;

const consumerKey = process.env.WC_CONSUMER_KEY;
const consumerSecret = process.env.WC_CONSUMER_SECRET;

const fetchFromWooCommerce = async (endpoint, params = {}) => {
    const url = new URL(`https://housedesigns.co.ke/CMS/wp-json/wc/v3/${endpoint}`);
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64'));

    params.fields = 'id,name,slug,price,images,attributes, options,short_description,description,categories, variations, thumbnails';

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
        }
        console.log(response);
        return await response.json();
        
        
    } catch (error) {
        console.error(error);
        throw error;
    }
};

app.get('/api/products', async (req, res) => {
    const {categoryId } = req.query;
    const params = categoryId ? { category: categoryId } : {};
    try {
        const products = await fetchFromWooCommerce('products',params);
        res.json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/api/categories', async (req, res) => {
    try {
        const categories = await fetchFromWooCommerce('products/categories?per_page=100');
        res.json(categories);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/api/products/:productId/attributes', async (req, res) => {
    try {
        const { productId } = req.params;
        const attributes = await fetchFromWooCommerce(`products/${productId}/attributes`);
        res.json(attributes);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Endpoint to fetch terms by attribute name
app.get('/api/attributes/terms', async (req, res) => {
    try {
        const { name } = req.query;
        const attributes = await fetchFromWooCommerce(`products/attributes`);
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
});


app.get('/api/products/:productId/variations', async (req, res) => {
    const { productId } = req.params;
    try {
        const variations = await fetchFromWooCommerce(`products/${productId}/variations`);
        res.json(variations);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
