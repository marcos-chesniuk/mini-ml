import React from 'react';
import ProductImagePreview from 'components/ProductImagePreview';
import ProductPricePreview from 'components/ProductPricePreview';
import ProductNamePreview from 'components/ProductNamePreview';
import ProductLocationPreview from 'components/ProductLocationPreview';
import 'styles/ProductCard.sass';

const ProductCard = ({product}) => {
    return (
        <div className='product-container'>
            <div className='product-preview'>
                {/* Revisar / consultar con respecto a las imágenes. El thumbnail
                    tiene mala calidad. En la consulta del ítem específico hay imágenes
                    mejores, pero debería hacerse otra llamada a la api */}
                <ProductImagePreview url={product.thumbnail} alt={product.title}/>
                <div className='product-info-preview'>
                    <ProductPricePreview
                        price={product.price}
                        currency={product.currency_id}
                        freeShipping={product.shipping.free_shipping}
                    />
                    <ProductNamePreview name={product.title}/>
                </div>
            </div>
            <ProductLocationPreview city={product.address.city_name}/>
        </div>
    );
};

export default ProductCard;