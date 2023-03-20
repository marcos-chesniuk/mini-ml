import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import SearchBar from 'components/SearchBar';
import 'styles/Home.sass';
import SEO from 'components/SEO';

export async function loader ({ request }) {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search');

    return {searchTerm};
}

const Home = () => {
    const {searchTerm} = useLoaderData();

    return (
        <div>
            <SEO title={'MiniML'} description={"Website created in React for MercadoLibre's eyes to test"} />
            <SearchBar searchTerm={searchTerm} />
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
};


export default Home;