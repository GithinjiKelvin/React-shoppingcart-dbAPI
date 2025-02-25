import "./Products.css"
import React, { useState } from 'react';
// import data from '../Data';
import { Link } from "react-router-dom";

function Products({ handleAddProduct, productItems }) {
    const [category, setCategory] = useState('all');

    const handleCategoryFilter = (category) => {
        setCategory(category);
    };

    // const filteredProducts = category === 'all' ? data.productItems : data.productItems.filter(item => item.category === category);
    const filteredProducts = category === 'all' ? productItems : productItems.filter(item => item.category === category);
    return (
        <div>
            <div className="categorybtns">
                <button className='category-btn' onClick={() => handleCategoryFilter('all')}>All</button>
                <button className='category-btn' onClick={() => handleCategoryFilter('children')}>Children</button>
                <button className='category-btn' onClick={() => handleCategoryFilter('adults')}>Adults</button>
            </div>
            <div className='products'>
                {filteredProducts.map((productitem) => (
                    <div className='card' key={productitem.id}>
                        <div>
                            <img className='prod-image' src={productitem.image} alt={productitem.name} />
                        </div>
                        <div>
                            <h3 className='prod-name'>{productitem.name}</h3>
                        </div>
                        <div className='price'>KSH{productitem.price}</div>
                        <div>
                        <Link to={`/product/${productitem.id}`} className="btn btn-primary">Details</Link>
                        </div>
                        <div>
                            <button className='product-btn' onClick={() => handleAddProduct(productitem)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products