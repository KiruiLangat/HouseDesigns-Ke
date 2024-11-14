const fetchAllProducts = async () => {
    try {
        const response = await fetch(`/api/shop/products`);
        if (!response.ok) {
            throw new Error('Error fetching products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error in fetchAllProducts:', error);
        throw error;
    }
};

const fetchProducts = async (categoryId) => {
    try {
        const response = await fetch(`/api/shop/products?categoryId=${categoryId}`);
        if (!response.ok) {
            throw new Error('Error fetching products');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const fetchCategories = async () => {
    try {
        const response = await fetch(`/api/shop/categories`);
        if (!response.ok) {
            throw new Error('Error fetching categories');
        }
        return await response.json();
    } catch (error) {
        console.error('Error in fetchCategories:', error.message);
        throw error;
    }
};

const fetchAttributes = async (productId) => {
    try {
        const response = await fetch(`/api/shop/products/${productId}/attributes`);
        if (!response.ok) {
            throw new Error('Error fetching attributes');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const fetchAttributesTerms = async (attributeName) => {
    try {
        const response = await fetch(`/api/shop/attributes/terms?name=${attributeName}`);
        if (!response.ok) {
            throw new Error('Error fetching attribute terms');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const fetchProductVariations = async (productId) => {
    try {
        const response = await fetch(`/api/shop/products/${productId}/variations`);
        if (!response.ok) {
            throw new Error('Error fetching variations');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const checkoutOrder = async () => {
    try {
        const response = await fetch(`/api/shop/checkout`);
        if (!response.ok) {
            throw new Error('Error fetching checkout');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const createNewUser = async (userData) => {
    try {
        const response = await fetch(`/api/shop/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error('Error creating user');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const newOrder = async () => {
    try {
        const response = await fetch(`/api/shop/orders`);
        if (!response.ok) {
            throw new Error('Error creating order');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export {
    fetchCategories,
    fetchAllProducts,
    fetchProducts,
    fetchAttributes,
    fetchProductVariations,
    fetchAttributesTerms,
    checkoutOrder,
    createNewUser,
    newOrder
};