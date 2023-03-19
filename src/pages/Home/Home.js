import React from 'react';
import { Outlet } from 'react-router';
import SearchBar from '../../components/SearchBar';

const Home = () => {
    return (
        <div>
            <SearchBar />
            <h1>HOME</h1>
            <div id='items'>
                <Outlet />
            </div>
        </div>
    );
};


export default Home;