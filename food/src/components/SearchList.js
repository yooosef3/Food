import Product from './main/products/Product';
import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchList = (props) => {
    const location = useLocation();
    const data = location.state;
    console.log(props);
    return (
        <div>
            {data && <Product name={data.name} />}
        </div>
    );
};

export default SearchList;