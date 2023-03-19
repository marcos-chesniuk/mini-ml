import React from 'react';
import 'styles/ProductImagePreview.scss'

const ProductImagePreview = ({ url, alt }) => {
    return (
        <div>
            <img className='product-image-preview' alt={alt} src={url}/>
        </div>
    );
};


export default ProductImagePreview;