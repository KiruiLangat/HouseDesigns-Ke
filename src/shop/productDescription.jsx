import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchProducts, fetchCategories } from './woocommerce'

import './productDescription.css'
import RadioButtonUnchecked  from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonChecked from '@mui/icons-material/RadioButtonChecked';
import { ReactComponent as Bedroom } from '../images/bedroom.svg'
import { ReactComponent as Bathroom } from '../images/bathroom.svg'
import { ReactComponent as Floors } from '../images/floors.svg'
import { ReactComponent as PlinthArea } from '../images/plinth.svg'


export default function ProjectDescription(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [fetchedCategories, setFetchedCategories] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProduct = await fetchProducts(id);
                setProduct(fetchedProduct);
                setSelectedImage(fetchedProduct.images[0].src);
                setFetchedCategories(await fetchCategories());
                const category = fetchedCategories.find(cat => cat.id === fetchedProduct.categories[0]);
                const similarProducts = await fetchProducts(category.id);
                setSimilarProducts(similarProducts);
            } catch (error) {
                console.log('Error Fetching Product', error);
            }
        }
        fetchData();
    }, [id]);


    return (
        <div className='product-description-container'>
            <div className='product-description-landing'>
                <div className='product-description-images'>
                    {product && product[0].images.slice(0, 4).map((image, index) => (
                        <div className='gallery-images'>
                            <img src={image.src} key={index} onClick={() => setSelectedImage(image.src)} />
                        </div>
                    ))}
                    <div className='gallery-image-view'>
                        <img src={selectedImage} />
                        <div className='product-attributes'>
                            <div className='Bedrooms'>
                                <Bedroom className='icon' />
                                <p>{product[0].attributes.find(attr => attr.name === 'Bedrooms')?.options[0]} Bedrooms</p>
                            </div>
                            <div className='Bathrooms'>
                                <Bathroom className='icon' />
                                <p>{product[0].attributes.find(attr => attr.name === 'Bathrooms')?.options[0]} Bathrooms</p>
                            </div>
                            <div className='Floors'>
                                <Floors className='icon-floors' />
                                <p>{product[0].attributes.find(attr => attr.name === 'Floors')?.options[0]} Floor(s)</p>
                            </div>
                            <div className='Plinth'>
                                <PlinthArea className='icon' />
                                <p>{product[0].attributes.find(attr => attr.name === 'Plinth Area')?.options[0]}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-description-details'>
                    <h1>{product && product[0].name}</h1>
                    <p>{product && product[0].description}</p>
                    <div className='product-description-price'>
                        <h2>${product && product[0].price}</h2>
                        <div className='product-description-CTA'>
                            <p>Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='similar-products'>
                <h1>Similar Products</h1>
                <div className='similar-products-container'>
                    {similarProducts.map((product, index) => (
                        <div key={index} className='similar-product-card'>
                            <img src={product.images[0].src} alt={product.name} />
                            <h3>{product.name}</h3>
                            <div className='product-price'>
                                <p>${product.price}</p>
                                <div className='product-CTA'>
                                    <p>Add to Cart</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}