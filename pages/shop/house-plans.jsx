import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchAllProducts, fetchCategories, fetchAttributes } from '../../services/shop/woocommerce';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCart, useWishlist } from '../../services/shop/cartContext';
import Bathrooms from '../../assets/images/Bathroom.svg';
import Bedrooms from '../../assets/images/Bedroom.svg';
import Floors from '../../assets/images/Floors.svg';
import PlinthArea from '../../assets/images/Plinth.svg';
import OptionsPopUp from '../../components/shop/OptionsPopUp';
import styles from '../../assets/styles/shop/HousePlans.module.css';
import '@fontsource/poppins';

const style = {
    fontFamily: 'Poppins',
};

// Product placeholder component - restructured to match exact product card structure
const ProductPlaceholder = () => (
    <div className={styles.productsCard}>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.cartWishlistPlaceholder}>
            <div className={styles.iconPlaceholder}></div>
            <div className={styles.iconPlaceholder}></div>
        </div>
        <div className={styles.productsCardTitle}>
            <div className={styles.titlePlaceholder}></div>
            <div className={styles.pricePlaceholder}></div>
        </div>
        <div className={styles.productsCardDetail}>
            <div className={styles.productsCardDetails}>
                <div className={styles.detailPlaceholder}></div>
            </div>
            <div className={styles.productsCardDetails}>
                <div className={styles.detailPlaceholder}></div>
            </div>
            <div className={styles.productsCardDetails}>
                <div className={styles.detailPlaceholder}></div>
            </div>
        </div>
    </div>
);

// Filter placeholder component
const FilterPlaceholder = () => (
    <div className={styles.filterPlaceholder}>
        <div className={styles.filterHeaderPlaceholder}></div>
        <div className={styles.filterItemsPlaceholder}>
            {[1, 2, 3, 4].map(i => (
                <div key={i} className={styles.filterItemPlaceholder}></div>
            ))}
        </div>
    </div>
);

export default function HousePlans({ category }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [attributes, setAttributes] = useState([]);
    const [selectedAttribute, setSelectedAttribute] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isFilterLoading, setIsFilterLoading] = useState(true);

    const { cart, handleAddToCart, handleRemoveFromCart } = useCart();
    const { wishlist, handleAddToWishlist, handleRemoveFromWishlist } = useWishlist();

    const isInCart = (product) => cart.some((item) => item && item.slug === product.slug);
    const isInWishlist = (product) => wishlist.some((item) => item.slug === product.slug);

    const [showOptionsPopUp, setShowOptionsPopUp] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);

    const handleClosePopUp = () => {
        setShowOptionsPopUp(false);
    };

    useEffect(() => {
        setIsLoading(true);
        fetchAllProducts()
            .then((fetchedProducts) => {
                setProducts(fetchedProducts);
                setFilteredProducts(fetchedProducts);
            })
            .catch(error => console.error("Error fetching products:", error))
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        setIsFilterLoading(true);
        fetchCategories()
            .then((fetchedCategories) => {
                setCategories(fetchedCategories);
            })
            .catch(error => console.error("Error fetching categories:", error))
            .finally(() => setIsFilterLoading(false));
    }, []);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setIsLoading(true);
            fetchAllProducts()
                .then((fetchedProducts) => {
                    setProducts(fetchedProducts);
                })
                .catch(error => console.error("Error fetching all products:", error))
                .finally(() => setIsLoading(false));
        } else {
            setIsLoading(true);
            fetchAllProducts(selectedCategory)
                .then((fetchedProducts) => {
                    setProducts(fetchedProducts);
                })
                .catch(error => console.error(`Error fetching products for category ${selectedCategory}:`, error))
                .finally(() => setIsLoading(false));
        }
    }, [selectedCategory]);

    useEffect(() => {
        const fetchInitialAttributes = async () => {
            setIsFilterLoading(true);
            try {
                const fetchedAttributes = await fetchAttributes();
                setAttributes(fetchedAttributes);
            } catch (error) {
                console.error("Error fetching attributes:", error);
            } finally {
                setIsFilterLoading(false);
            }
        };
        fetchInitialAttributes();
    }, []);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleCategoryChange = async (category) => {
        setSelectedCategory(category === selectedCategory ? 'null' : category);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };


    useEffect(() => {
        setFilteredProducts(
            products.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.categories.includes(categories)
            )
        );
    }, [searchTerm, products, categories]);

    const handleAttributeChange = (selectedAttribute) => {
        setSelectedAttribute(selectedAttribute);
    };

    const [isBedroomVisible, setIsBedroomVisible] = useState(false);

    const toggleBedroom = () => {
        setIsBedroomVisible(!isBedroomVisible);
    };

    const [isBathroomVisible, setIsBathroomVisible] = useState(false);

    const toggleBathroom = () => {
        setIsBathroomVisible(!isBathroomVisible);
    };

    const [isFloorVisible, setIsFloorVisible] = useState(false);

    const toggleFloor = () => {
        setIsFloorVisible(!isFloorVisible);
    };

    const [isPlinthAreaVisible, setIsPlinthAreaVisible] = useState(false);

    const togglePlinthArea = () => {
        setIsPlinthAreaVisible(!isPlinthAreaVisible);
    };

    const toggleFilter = () => {
        setIsFilterActive(!isFilterActive);
    };

    return (
        <div className={styles.productsHomeContainer} style={style}>
            <div className={styles.productsHome}>
                <h1>House Plans</h1>
                <div className={styles.filterProducts}>
                    <div className={styles.filters}>
                        <div
                            className={`${styles.filterHeader} ${isFilterActive ? styles.active : ''}`}
                            onClick={toggleFilter}
                        >
                            <TuneIcon className={styles.iconTune} />
                            <p>Filters</p>
                        </div>
                        {isFilterLoading ? (
                            <FilterPlaceholder />
                        ) : (
                            <div className={styles.filterOptions}>
                                <div className={styles.byCategory}>
                                    <div className={styles.categoryDropdown} onClick={toggleDropdown}>
                                        <h3>Category</h3>
                                        {isDropdownVisible ? (
                                            <ArrowDropUpIcon className={styles.iconDrop} />
                                        ) : (
                                            <ArrowDropDownIcon className={styles.iconDrop} />
                                        )}
                                    </div>
                                    {isDropdownVisible && (
                                        <ul>
                                            {[
                                                ...categories.filter((category) => category.name !== 'Uncategorized'),
                                            ].map((category) => (
                                                <li key={category} onClick={() => handleCategoryChange(category)}>
                                                    {selectedCategory !== category ? (
                                                        <RadioButtonUncheckedIcon className={styles.iconCategory} />
                                                    ) : (
                                                        <RadioButtonCheckedIcon className={styles.iconCategory} />
                                                    )}
                                                    {category.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className={styles.byBedrooms}>
                                    <div className={styles.bedroomsDropdown} onClick={toggleBedroom}>
                                        <h3>Bedrooms</h3>
                                        {isBedroomVisible ? (
                                            <ArrowDropUpIcon className={styles.iconDrop} />
                                        ) : (
                                            <ArrowDropDownIcon className={styles.iconDrop} />
                                        )}
                                    </div>
                                    {isBedroomVisible && (
                                        <ul>
                                            {attributes
                                                .find((attr) => attr.name === 'Bedrooms')
                                                ?.options?.map((option, index) => (
                                                    <li key={index} onClick={() => handleAttributeChange(option)}>
                                                        {selectedAttribute === option ? (
                                                            <RadioButtonCheckedIcon className={styles.iconCategory} />
                                                        ) : (
                                                            <RadioButtonUncheckedIcon className={styles.iconCategory} />
                                                        )}
                                                        {option}
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </div>
                                <div className={styles.byBedrooms}>
                                    <div className={styles.bedroomsDropdown} onClick={toggleBathroom}>
                                        <h3>Bathrooms</h3>
                                        {isBathroomVisible ? (
                                            <ArrowDropUpIcon className={styles.iconDrop} />
                                        ) : (
                                            <ArrowDropDownIcon className={styles.iconDrop} />
                                        )}
                                    </div>
                                    {isBathroomVisible && (
                                        <ul>
                                            {attributes
                                                .find((attr) => attr.name === 'Bathrooms')
                                                ?.options?.map((option, index) => (
                                                    <li key={index} onClick={() => handleAttributeChange(option)}>
                                                        {selectedAttribute === option ? (
                                                            <RadioButtonCheckedIcon className={styles.iconCategory} />
                                                        ) : (
                                                            <RadioButtonUncheckedIcon className={styles.iconCategory} />
                                                        )}
                                                        {option}
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </div>
                                <div className={styles.byBedrooms}>
                                    <div className={styles.bedroomsDropdown} onClick={toggleFloor}>
                                        <h3>Floors</h3>
                                        {isFloorVisible ? (
                                            <ArrowDropUpIcon className={styles.iconDrop} />
                                        ) : (
                                            <ArrowDropDownIcon className={styles.iconDrop} />
                                        )}
                                    </div>
                                    {isFloorVisible && (
                                        <ul>
                                            {attributes
                                                .find((attr) => attr.name === 'Floors')
                                                ?.options?.map((option, index) => (
                                                    <li key={index} onClick={() => handleAttributeChange(option)}>
                                                        {selectedAttribute === option ? (
                                                            <RadioButtonCheckedIcon className={styles.iconCategory} />
                                                        ) : (
                                                            <RadioButtonUncheckedIcon className={styles.iconCategory} />
                                                        )}
                                                        {option}
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </div>
                                <div className={styles.byBedrooms}>
                                    <div className={styles.bedroomsDropdown} onClick={togglePlinthArea}>
                                        <h3>Plinth Area</h3>
                                        {isPlinthAreaVisible ? (
                                            <ArrowDropUpIcon className={styles.iconDrop} />
                                        ) : (
                                            <ArrowDropDownIcon className={styles.iconDrop} />
                                        )}
                                    </div>
                                    {isPlinthAreaVisible && (
                                        <ul>
                                            {attributes
                                                .find((attr) => attr.name === 'Plinth Area')
                                                ?.options?.map((option, index) => (
                                                    <li key={index} onClick={() => handleAttributeChange(option)}>
                                                        {selectedAttribute === option ? (
                                                            <RadioButtonCheckedIcon className={styles.iconCategory} />
                                                        ) : (
                                                            <RadioButtonUncheckedIcon className={styles.iconCategory} />
                                                        )}
                                                        {option}
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.productsSearch}>
                        <div className={styles.productsSearchBar}>
                            <SearchIcon className={styles.iconSearchProducts} />
                            <input
                                type="text"
                                placeholder="Search for Products"
                                onChange={handleSearchChange}
                                value={searchTerm}
                            />
                        </div>
                        <div className={styles.products}>
                            {isLoading ? (
                                // Display placeholders in the same grid structure as products
                                <>
                                    <ProductPlaceholder />
                                    <ProductPlaceholder />
                                    <ProductPlaceholder />
                                    <ProductPlaceholder />
                                    <ProductPlaceholder />
                                    <ProductPlaceholder />
                                </>
                            ) : filteredProducts && filteredProducts.length > 0 ? (
                                // Display actual products once loaded
                                filteredProducts.map((product) => (
                                    <div key={product.id} className={styles.productsCard}>
                                        <Link href={`/shop/product/${product.slug}`}>
                                            {product.images && product.images.length > 0 ? (
                                                <Image 
                                                    src={product.images[0].src} 
                                                    alt={product.name} 
                                                    width={200} 
                                                    height={200} 
                                                    loading='lazy' 
                                                />
                                            ) : (
                                                <div className={styles.noImagePlaceholder}>
                                                    No Image Available
                                                </div>
                                            )}
                                        </Link>
                                        <div className={styles.cartWishlist}>
                                            <div
                                                className={styles.wishlist}
                                                onClick={() =>
                                                    isInWishlist(product)
                                                        ? handleRemoveFromWishlist(product)
                                                        : handleAddToWishlist(product)
                                                }
                                            >
                                                {wishlist.includes(product) ? (
                                                    <FavoriteIcon className={styles.iconWishlist} />
                                                ) : (
                                                    <FavoriteBorderIcon className={styles.iconWishlist} />
                                                )}
                                            </div>
                                            <div
                                                className={styles.addCart}
                                                onClick={() => {
                                                    setSelectedProduct(product);
                                                    setShowOptionsPopUp(true);
                                                }}
                                            >
                                                {isInCart(product) ? (
                                                    <ShoppingBagIcon className={styles.iconAddCart} />
                                                ) : (
                                                    <ShoppingBagOutlinedIcon className={styles.iconAddCart} />
                                                )}
                                            </div>
                                            {showOptionsPopUp && selectedProduct === product && (
                                                <OptionsPopUp
                                                    product={selectedProduct}
                                                    onClose={() => setShowOptionsPopUp(false)}
                                                    setSelectedPrice={setSelectedPrice}
                                                    selectedPrice={selectedPrice}
                                                    handleClosePopUp={handleClosePopUp}
                                                    onSelectOption={(_option) => {
                                                        isInCart(selectedProduct)
                                                            ? handleRemoveFromCart(selectedProduct)
                                                            : handleAddToCart(selectedProduct, selectedPrice);
                                                        setShowOptionsPopUp(false);
                                                    }}
                                                />
                                            )}
                                        </div>
                                        <div className={styles.productsCardTitle}>
                                            <h3>{product.name}</h3>
                                            <h4>From ${product.price}</h4>
                                        </div>
                                        <div className={styles.productsCardDetail}>
                                            <div className={styles.productsCardDetails}>
                                                <Image src={Bedrooms} alt="Bedrooms" className={styles.iconGrid} />
                                                <p>
                                                    {product.attributes.find((attr) => attr.name === 'Bedrooms')?.options[0]} Bedrooms
                                                </p>
                                            </div>
                                            <div className={styles.productsCardDetails}>
                                                <Image src={Floors} alt="Floors" className={styles.iconGridFloors} />
                                                <p>
                                                    {product.attributes.find((attr) => attr.name === 'Floors')?.options[0]} Floor(s)
                                                </p>
                                            </div>
                                            <div className={styles.productsCardDetails}>
                                                <Image src={PlinthArea} alt="Plinth Area" className={styles.iconGrid} />
                                                <p>{product.attributes.find((attr) => attr.name === 'Plinth Area')?.options[0]}</p>
                                            </div>
                                            <div className={styles.productsCardDetails}>
                                                <Image src={Bathrooms} alt="Bathrooms" className={styles.iconGrid} />
                                                <p>
                                                    {product.attributes.find((attr) => attr.name === 'Bathrooms')?.options[0]} Bathrooms
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className={styles.noProducts}>No products found. Try changing your search criteria.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}