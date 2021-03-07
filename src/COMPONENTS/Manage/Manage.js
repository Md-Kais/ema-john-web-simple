import React from 'react';
import img from './giphy.gif'
const Manage = () => {
    localStorage.clear();
    sessionStorage.clear();
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{textAlign: 'center'}}> Your Cart is Approved to deliver but Developer is Sleeping ....</h1>
            <img src={img} alt="fuck you" ></img>
        </div>
    );
};

export default Manage;