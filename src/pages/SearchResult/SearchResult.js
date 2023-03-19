import React from 'react';
import getProducts from "../../services/Products";
import { useLoaderData } from 'react-router';

export async function loader ({ request, params }) {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search');
    const products = await getProducts(searchTerm)
    return {products}
}
const SearchResult = (props) => {
    const {products} = useLoaderData()
    console.log(products)

    return (
        <div>
            <h1>RESULTS</h1>
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