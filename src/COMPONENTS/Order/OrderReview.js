import React from 'react';
import { Link } from 'react-router-dom';
// import fakeData from '../../fakeData';
import OrderRevCard from './OrderRevCard';
// import order from './Order.Css'
import Cart from '../Cart/Cart';


const Order = () => {
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
    const style = {
        fontSize: '20px',
        color: 'white',
        textDecoration: 'none',
        padding: '10px'
    }
    return (
        <div className="shop">
            {/* <h1>this is an order</h1>; */}
            <div className="product-container">
                <h1>Total Items: {cartItems}</h1>
                {

                    cartObject.map((ele) => {


                        return (<OrderRevCard realProduct={ele}></OrderRevCard>)

                    }
                    )
                }
                <div style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                    <button className="button" ><Link to='/manage' style={style}>Procceed</Link></button>
                </div>
            </div>
            <div className="cart-container">
                {/* <h1>this is cart</h1>
                 <h1> Order :  {cart.length}</h1> */}
                <Cart name='manage' process="Place Order"></Cart>
                {/* <button className="button" ><Link to='/manage' style={style}>Procceed</Link></button> */}
            </div>

        </div>
    );
};

export default Order;