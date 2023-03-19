import React from 'react';
import 'styles/ProductCategories.scss'

const ProductCategories = ({ categories }) => {
    function formatCategories() {
        return <div className='categories'>
            {
                categories.map((category) => category.name)
                .map((value, index, arr) => {
                    if (index === arr.length - 1) {
                        return <strong key={value} >{ value }</strong>
                    } else {
                        return <span key={value} >{ value + ' > '} </span>
                    }
                })
            }
        </div>
    }

    return (
        <div>
            {formatCategories()}
        </div>
    );
};


export default ProductCategories;