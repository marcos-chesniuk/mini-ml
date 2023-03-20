import React from 'react';
import { useLoaderData } from 'react-router';
import { getProduct, getProductDescription } from 'services/Products';
import ProductCategories from 'components/ProductCategories';
import 'styles/ProductDetail.scss'
import { getCategories } from 'services/Categories';
import ProductImage from 'components/ProductImage';
import ProductSellInfo from 'components/ProductSellInfo';
import ProductDescription from 'components/ProductDescription';

export async function loader ({ params }) {
    const product = await getProduct(params.id);
    const productDescription = await getProductDescription(params.id);
    const categories = await getCategories(product.category_id)
    
    return { product, productDescription, categories};
}

const ProductDetail = () => {
    const {product, productDescription, categories} = useLoaderData()

    return (
        <div>
            <ProductCategories categories={categories} />
            <div className='products-container'>
                <div className='product-first-look'>
                    <ProductImage url={product.pictures[0].url} alt={product.title} />
                    <ProductSellInfo product={product} />
                </div>
                <ProductDescription description={productDescription} />
            </div>
        </div>
    );
};


export default ProductDetail;