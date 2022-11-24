import React from 'react';
import loading from '../../assets/images/Spinner-0.8s-197px.gif'

const Loader = () => {
    return (
        <div style={{width: '100%', textAlign: 'center', padding: '120px 0 60px 0'}}>
            <img alt='spinner' src={loading}/>
        </div>
    );
};

export default Loader;