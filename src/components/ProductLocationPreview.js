import React from 'react';
import 'styles/ProductLocationPreview.scss';

const ProductLocationPreview = ({ city }) => {
    return (
        <div className='location'>
            {city}
        </div>
    );
};


export default ProductLocationPreview;