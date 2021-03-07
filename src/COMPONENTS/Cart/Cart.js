import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';


import './Cart.css'

function fixedMe(number) {
    number = number.toFixed(2);
    return Number(number);
}


const Cart = (props) => {
    let cartItems = 0;
    ///const object=JSON.parse(localStorage);
    const object = JSON.parse(JSON.stringify(localStorage));
    //make it string then again object . XIX -Slipknot. 
    //console.log(Object.keys(object));
    const cartObject = Object.keys(object);
    //console.log(localStorage);
    for (let x in cartObject) {
        cartItems += Number(localStorage.getItem(cartObject[x]));

        //console.log(cartItems,x);
    }
    //cart Items end

    let [total, setTotal] = useState(0);
    let xTotal = 0;
   

    // let total = cart.reduce((total, prd) => total + prd.price, 0);
    useEffect(() => {
        if(cartItems===0){
            xTotal= Number(0);
            setTotal(xTotal);
        }
        else{
            for (let x in cartObject) {
                let data = fakeData.find((pdKey) => cartObject[x] === pdKey.key);
                let { price } = data;
                let quantity = Number(localStorage.getItem(cartObject[x]));
                xTotal += Number(price * quantity);
                  console.log(xTotal);
                setTotal(xTotal);


            }
           
        }
       

    }, [cartItems]);
   
    



    




    total = fixedMe(total);
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    let tax = total / 10;
    tax = fixedMe(tax);
    const style = {
        fontSize: '20px',
        color: 'white',
        textDecoration: 'none',
        padding: '10px'
    }

    return (
        <>
            <div className="cart">
                <h3>Order Summary </h3>
                <p>Items Ordered : {cartItems}</p>
                <p>Total : {fixedMe(total)} </p>
                <p>Shipping: {shipping}</p>
                <p>Tax : {tax}</p>
                <p>Grand Total: {fixedMe(total + tax + shipping)}</p>
            </div>
            <div style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                <button className="button" ><Link to={`/${props.name}`} style={style}>{props.process}</Link></button>
            </div>
        </>
    );
};

export default Cart;