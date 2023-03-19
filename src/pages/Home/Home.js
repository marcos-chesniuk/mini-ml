import React from 'react';
import { Outlet } from 'react-router';
import SearchBar from 'components/SearchBar';
import 'styles/Home.scss'

const Home = () => {
    return (
        <div>
            <SearchBar />
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
};


export default Home;