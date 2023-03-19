import React from 'react';
import { useLoaderData } from 'react-router';
import { getProduct, getProductDescription } from 'services/Products';
import ProductCategories from 'components/ProductCategories';
import 'styles/ProductDetail.scss'
import { getCategories } from 'services/Categories';

export async function loader ({ params }) {
    const product = await getProduct(params.id);
    const productDescription = await getProductDescription(params.id);
    
    const categories = await getCategories(product.category_id)
    
    console.log(product)
    console.log(productDescription)
    console.log(categories)
    return { product, productDescription, categories};
}

const ProductDetail = () => {
    const {product, productDescription, categories} = useLoaderData()

    return (
        <div>
            <ProductCategories categories={categories} />
            <div className='product-container'>
                <div>
                    {product.title}
                </div>
                <div className='description-container'>
                    {productDescription.plain_text}
                </div>
            </div>
        </div>
    );
};


export default ProductDetail;