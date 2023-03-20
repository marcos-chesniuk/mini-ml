import React, { useState, useEffect } from 'react';
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import 'styles/SearchBar.sass'


const SearchBar = ({ searchTerm }) => {
    const [searchInput, setsearchInput] = useState(searchTerm || '');
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!location.search) {
            setsearchInput('')
        } else {
            setsearchInput(searchTerm)
        }
    }, [location, searchTerm]);

    const handleChange = (event) => {
        setsearchInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/items?search=${searchInput}`)
    }

    return (
        <div className='search-bar-container'>
            <Link to={'/'} className='logo'>
                <img src='/img/Logo_ML.png' alt='logo mercado libre'/>
            </Link>
            <Form onSubmit={handleSubmit}>
                <input
                    className='search-input'
                    type='search'
                    name='search'
                    placeholder='Nunca dejes de buscar'
                    value={searchInput}
                    onChange={handleChange}
                />
                <button type='search'>
                    <img className='icon' src='/img/ic_Search.png' alt='search icon' />
                </button>
            </Form>
        </div>
    );
};

export default SearchBar;