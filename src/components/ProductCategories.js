import React from 'react';
import 'styles/ProductCategories.sass';

const ProductCategories = ({ categories }) => {
    function formatCategories() {
        return <div className='categories'>
            {
                categories.map((category, index, arr) => {
                    if (index === arr.length - 1) {
                        return <strong key={category.id} >{ category.name }</strong>
                    } else {
                        return <span key={category.id} >{ category.name + ' > '} </span>
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