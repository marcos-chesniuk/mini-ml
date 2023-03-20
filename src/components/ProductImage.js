import React from 'react';
import 'styles/ProductImage.sass';

const ProductImage = ({ url, alt }) => {
    return (
        <div className='product-image-container'>
            <img className='product-image' alt={alt} src={url}/>
        </div>
    );
};


export default ProductImage;