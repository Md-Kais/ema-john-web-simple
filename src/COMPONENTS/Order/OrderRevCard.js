import React from 'react';
import fakeData from '../../fakeData';
function fixedMe(number) {
    number = number.toFixed(2);
    return Number(number);
}

let totAmount=0;
const OrderRevCard = (props) => {
    function removeClick(key){
        let numberOfItem = Number(localStorage.getItem(key));
        if(numberOfItem===1){
            localStorage.removeItem(key);
            window.location.reload(true);
        }
        else{
            numberOfItem-=1;
            localStorage.setItem(`${key}`, numberOfItem);
            window.location.reload(true);
        }
        PRICE();
    }
   let realProduct = props.realProduct;
   // console.log(props.realProduct)
    const realProduc = fakeData.find(pd => { return realProduct === pd.key });
    const { img, name, price, seller, star, stock } = realProduc;
    
    function PRICE(){
        let ItemNumber = Number(localStorage.getItem(realProduct));
        totAmount+=(Number(price)*ItemNumber);
        sessionStorage.removeItem('total');
        totAmount=fixedMe(totAmount);
        sessionStorage.setItem('total',totAmount);
       
      
    }
    PRICE();
    
    
    return (
        
        <div style={{padding: '10px 40px 10px 40px'}}>
           
            <img src={img} alt="fuck"></img>  
            <div className="product-name">

                <h4 className="name">{name}</h4>

                <p> by: {seller}</p>
                <h4>$ {price}</h4>
                <p>only <strong> {stock} </strong>left in the stock. Order Now.</p>
                <p>this product get {star} star</p>
                <h4>You wanna buy {localStorage.getItem(realProduct)} items like this.</h4>
                <button className="button" onClick={() => { removeClick(props.realProduct) }}>Remove 1 item from this</button>
            </div>
             <hr/>
            <h1>Price(items): {totAmount}</h1>
            <hr></hr>
        </div>
    );
};

export default OrderRevCard;