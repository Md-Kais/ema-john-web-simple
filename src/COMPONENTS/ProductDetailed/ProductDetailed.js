import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';

const ProductDetailed = () => {
    let { productKey }= useParams();
    const realProduct=fakeData.find(pd=>{return productKey===pd.key});
    const { img , name , price  , seller , star ,stock }= realProduct;
   // Fuck this World. Fuck People. People is Shit. 
   // Walk with me. walk with me.

    //localStorage.setItem('kais', 'closer');//set item by key and value
    //localStorage.setItem('jfasd', 'sfsdf');
    //const mother = localStorage.getItem('jais');//get item by calling it
    //console.log(mother);
    //const obj = JSON.stringify(localStorage);
   // console.log(localStorage);
    //console.log(JSON.parse(obj).length);
   // let object = JSON.parse(obj);
   // console.log(localStorage.length);
    //localStorage.removeItem(mother);//renove that shit
   // console.log(localStorage);
    //localStorage.clear();
  //  console.log(localStorage);
  //  console.log(localStorage.key(mother));// doonoo
    return (
        <div style={{textAlign:'center'}}>
           
            <img src={img} alt="fuck"></img>
            <div className="product-name">

                <h4 className="name">{name}</h4>

                <p> by: {seller}</p>
                <h4>$ {price}</h4>
                <p>only <strong> {stock} </strong>left in the stock. Order Now.</p>
                <p>this product get {star} star</p>
                
            </div>
             
        </div>
    );
};

export default ProductDetailed;