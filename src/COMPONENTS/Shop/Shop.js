import React from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
     //const [products,setProducts]=useState(fakeData.slice(0,10));//slice for 10
    //console.log(fakeData);
    const [products,setProducts]=useState(fakeData.slice(0,20));
    const [cart, setCart] = useState([]);
   
    const handleClick=(product)=>{
       
        const newCart = [...cart , product];
        setCart (newCart);
        console.log(product);
        if(localStorage.getItem(`${product.key}`)===null){
            
            localStorage.setItem(`${product.key}`,'1');//0 cannot be default
            console.log(localStorage.getItem(`${product.key}`));
        }
        else{
            
            let count = localStorage.getItem(`${product.key}`);
            count=Number(count)+1;
            localStorage.setItem(`${product.key}`,count);
            console.log(localStorage.getItem(`${product.key}`));
        }
      
    }
    
   
    //let newProducts=[...]
   // console.log(products);
    return (
        <div className="shop">
            <div className="product-container">
                {
                    products.map(product =><Product handleClick={handleClick} pd={product} key={product.key}></Product>)
                }
            </div>
            <div className="cart-container">
                {/* <h1>this is cart</h1>
                 <h1> Order :  {cart.length}</h1> */}
                 <Cart name='orderReview'></Cart>
            </div>
        </div>
    );
};

export default Shop;