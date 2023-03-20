import React from 'react';
import { useLoaderData } from 'react-router';
import { getProducts } from "services/Products";
import {getCategories, getDomainDiscovery} from "services/Categories";
import ProductCard from 'components/ProductCard';
import ProductCategories from 'components/ProductCategories';
import 'styles/SearchResult.sass'
import { Link } from 'react-router-dom';

export async function loader ({ request }) {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search');
    const products = await getProducts(searchTerm)

    let categories = [{ name: 'No se pudieron obtener las categorías' }];

    const domainDiscovery = await getDomainDiscovery(searchTerm)
    if (domainDiscovery && domainDiscovery.length > 0) {
        const categoryId = domainDiscovery[0].category_id
        categories = await getCategories(categoryId)
    }

    return {products, categories}
}

const SearchResult = () => {
    const {products, categories} = useLoaderData()

    return (
        <div>
            <ProductCategories categories={categories} />
            <div className='products' >
                { products &&
                    <ul>
                        {products.map((item) => (
                            <div key={item.id} className='card-container'>
                                <Link to={item.id} className='product-link' >
                                    <ProductCard product={item} />
                                </Link>
                            </div>
                        ))}
                    </ul>
                }
            </div>
        </div>
    );
};

export default SearchResult;