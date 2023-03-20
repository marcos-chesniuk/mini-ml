import React from 'react';
import 'styles/ProductDescription.sass';

const ProductDescription = ({ description }) => {
    return (
        <div className='description-container'>
            <div>
                Descripción del producto
            </div>
            <div className='description-text'>
                {description.plain_text !== '' ? description.plain_text : 'No se encontró descripción para este producto'}
            </div>
        </div>
    );
};


export default ProductDescription;