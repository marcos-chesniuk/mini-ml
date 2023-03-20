import React from 'react';
import 'styles/ProductImagePreview.sass'

const ProductImagePreview = ({ url, alt }) => {
    return (
        <div>
            <img className='product-image-preview' alt={alt} src={url}/>
        </div>
    );
};


export default ProductImagePreview;