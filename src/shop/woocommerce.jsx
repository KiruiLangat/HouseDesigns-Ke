
const fetchProducts = async (categoryID) => {
    try {
        const response = await fetch(`http://localhost:3001/api/products?category=${categoryID}&_embed`)
        if (!response.ok){
            throw new Error('Error fetching products')
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        throw error;
    }
}

const fetchCategories = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/categories')
        if (!response.ok){
            throw new Error('Error fetching categories')
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export {fetchCategories, fetchProducts}