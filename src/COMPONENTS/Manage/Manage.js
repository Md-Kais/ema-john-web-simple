import React from 'react';
import img from './giphy.gif'
const Manage = () => {
    let confirmation = localStorage.length;
    let printConfirmation = {};
    if (confirmation === 0) {

        printConfirmation = <h1>You won't select anything. Go to the shop . Nor I fuck you</h1>;

    }
    else{
        printConfirmation = (<div><h1 style={{ textAlign: 'center' }}> Your Cart is Approved to deliver but Developer is Sleeping ....</h1><img src={img} alt="fuck you" ></img></div>);
        //JSX has one parent element
    }

    localStorage.clear();
    sessionStorage.clear();
    return (
        <div style={{ textAlign: 'center' }}>
           
            {printConfirmation}
            
        </div>
    );
};

export default Manage;