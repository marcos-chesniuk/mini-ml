import React, { useState } from 'react';
import { Form, useNavigate } from "react-router-dom";


const SearchBar = ({ searchTerm }) => {
    const [searchInput, setsearchInput] = useState(searchTerm || '');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setsearchInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/items?search=${searchInput}`)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <input
                    type='search'
                    name='search'
                    placeholder='Nunca dejes de buscar'
                    value={searchInput}
                    onChange={handleChange}
                />
            </Form>
        </div>
    );
};

export default SearchBar;