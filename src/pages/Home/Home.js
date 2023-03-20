import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import SearchBar from 'components/SearchBar';
import 'styles/Home.sass'

export async function loader ({ request }) {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search');

    return {searchTerm}
}

const Home = () => {
    const {searchTerm} = useLoaderData()

    return (
        <div>
            <SearchBar searchTerm={searchTerm} />
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
};


export default Home;