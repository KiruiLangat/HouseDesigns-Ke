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
import { ReactComponent as Bathrooms } from '../../assets/images/bathroom.svg';
import { ReactComponent as Bedrooms } from '../../assets/images/bedroom.svg';
import { ReactComponent as Floors } from '../../assets/images/floors.svg';
import { ReactComponent as PlinthArea } from '../../assets/images/plinth.svg';
import OptionsPopUp from '../../components/shop/optionsPopUp';
import styles from '../../assets/styles/shop/Allproducts.module.css';
import '@fontsource/poppins';

const style = {
    fontFamily: 'Poppins',
};

export default function Allproducts({ category }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [attributes, setAttributes] = useState([]);
    const [selectedAttribute, setSelectedAttribute] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isFilterActive, setIsFilterActive] = useState(false);

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
        fetchAllProducts().then((fetchedProducts) => {
            setProducts(fetchedProducts);
        });
    }, []);

    useEffect(() => {
        fetchCategories().then((fetchedCategories) => {
            setCategories(fetchedCategories);
        });
    }, []);

    useEffect(() => {
        if (selectedCategory === 'all') {
            fetchAllProducts().then((fetchedProducts) => {
                setProducts(fetchedProducts);
            });
        } else {
            fetchAllProducts(selectedCategory).then((fetchedProducts) => {
                setProducts(fetchedProducts);
            });
        }
    }, [selectedCategory]);

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            try {
                const fetchedProducts = await fetchAllProducts(selectedCategory);
                setProducts(fetchedProducts);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategoryProducts();
    }, [selectedCategory]);

    useEffect(() => {
        const fetchInitialAttributes = async () => {
            try {
                const fetchedAttributes = await fetchAttributes();
                setAttributes(fetchedAttributes);
            } catch (error) {
                console.error(error);
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

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Search');
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
        console.log(isBedroomVisible);
    };

    const [isBathroomVisible, setIsBathroomVisible] = useState(false);

    const toggleBathroom = () => {
        setIsBathroomVisible(!isBathroomVisible);
        console.log(isBathroomVisible);
    };

    const [isFloorVisible, setIsFloorVisible] = useState(false);

    const toggleFloor = () => {
        setIsFloorVisible(!isFloorVisible);
        console.log(isFloorVisible);
    };

    const [isPlinthAreaVisible, setIsPlinthAreaVisible] = useState(false);

    const togglePlinthArea = () => {
        setIsPlinthAreaVisible(!isPlinthAreaVisible);
        console.log(isPlinthAreaVisible);
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
                    </div>
                    <div className={styles.productsSearch}>
                        <div className={styles.productsSearchBar}>
                            <SearchIcon className={styles.iconSearchProducts} onClick={() => handleSearch()} />
                            <input
                                type="text"
                                placeholder="Search for Products"
                                onChange={handleSearchChange}
                                value={searchTerm}
                            />
                        </div>
                        <div className={styles.products}>
                            {filteredProducts &&
                                filteredProducts.map((product) => (
                                    <div key={product.id} className={styles.productsCard}>
                                        <Link href={`/shop/product/${product.slug}`}>
                                            <Image src={product.images[0].src} alt={product.name} width={200} height={200} />
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
                                                <Bedrooms className={styles.iconGrid} />
                                                <p>
                                                    {product.attributes.find((attr) => attr.name === 'Bedrooms')?.options[0]} Bedrooms
                                                </p>
                                            </div>
                                            <div className={styles.productsCardDetails}>
                                                <Floors className={styles.iconGridFloors} />
                                                <p>
                                                    {product.attributes.find((attr) => attr.name === 'Floors')?.options[0]} Floor(s)
                                                </p>
                                            </div>
                                            <div className={styles.productsCardDetails}>
                                                <PlinthArea className={styles.iconGrid} />
                                                <p>{product.attributes.find((attr) => attr.name === 'Plinth Area')?.options[0]}</p>
                                            </div>
                                            <div className={styles.productsCardDetails}>
                                                <Bathrooms className={styles.iconGrid} />
                                                <p>
                                                    {product.attributes.find((attr) => attr.name === 'Bathrooms')?.options[0]} Bathrooms
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}