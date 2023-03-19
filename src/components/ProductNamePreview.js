import React from 'react';
import 'styles/ProductNamePreview.scss'

const ProductNamePreview = ({ name }) => {
    return (
        <div className='product-name-preview'>
            {name}
        </div>
    );
};


export default ProductNamePreview;