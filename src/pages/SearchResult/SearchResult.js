import React from 'react';
import getProducts from "../../services/Products";
import getCategories from "../../services/Categories";
import { useLoaderData } from 'react-router';

export async function loader ({ request, params }) {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search');
    const products = await getProducts(searchTerm)
    const categories = await getCategories(searchTerm) || ['No se pudieron obtener las categorías']
    return {products, categories}
}
const SearchResult = (props) => {
    const {products, categories} = useLoaderData()
    console.log(products)

    function formatCategories() {
        return <div>
            {
                categories.map((category) => category.name)
                .map((value, index, arr) => {
                    if (index === arr.length - 1) {
                        return <strong key={value} >{ value }</strong>
                    } else {
                        return <span key={value} >{ value + ' > '} </span>
                    }
                })
            }
        </div>
    }

    return (
        <div>
            {formatCategories()}
            { products &&
                <ul>
                    {products.map((item) => (
                        <li key={item.id}>
                            {item.title} {item.price}
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default SearchResult;