import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props);
    return (
        <div className="product-list">
            <img src={props.pd.img} alt="" />
            <div className="product-name">
                <h4 className="name">{props.pd.name}</h4>
                <p> by: {props.pd.seller}</p>
                <h4>$ {props.pd.price}</h4>
                <p>only <strong>{props.pd.stock} </strong>left in the stock. Order Now.</p>
                <button className="button" onClick={()=>{props.handleClick(props.pd) }}> <FontAwesomeIcon icon={faShoppingCart}/>Add to Cart</button>
            </div> 
        </div>
    );
};

export default Product;