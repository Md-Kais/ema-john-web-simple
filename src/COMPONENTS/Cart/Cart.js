import React from 'react';
import './Cart.css'

function fixedMe(number){
   number = number.toFixed(2);
   return Number(number);
}

//console.log(fixedMe(2.2345432345434));

const Cart = (props) => {
    const cart = props.cart;
    let total = cart.reduce((total, prd) => total + prd.price, 0);
    total=fixedMe(total);
    let shipping=0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping= 12.99;
    }
    let tax=total/10;
    tax=fixedMe(tax);


    return (
        <div className="cart">
          <h3>Order Summary </h3>
            <p>Items Ordered : {props.cart.length}</p>
            <p>Total : {fixedMe(total)} </p>
            <p>Shipping: {shipping}</p>
            <p>Tax : {tax}</p>
            <p>Grand Total: {fixedMe(total+tax+shipping)}</p>
        </div>
    );
};

export default Cart;