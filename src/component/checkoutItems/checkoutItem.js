import React from 'react';
import {ClearItemFromCart , Additem ,RemoveItemcart} from '../../redux/cart/cart.action';

import {connect} from 'react-redux';
import './checkoutitems.style.scss';

const CheckOutItem =({item ,clearItem,RemoveItemcarts ,additems })=>{
    const {name,price,quantity,imageUrl}=item
    return(
    <div className='checkout-item'>
        <div className="image-container">
            <img src={imageUrl}alt="error"/> 
        </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>additems(item)}>&#10094;</div>
                  <span className="value"> {quantity} </span>     
                <div className='arrow' onClick={()=>RemoveItemcarts(item)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button'  onClick={()=>clearItem(item)}>&#10006;</div>

    </div>
)};
const mapDispatchToProps =dispatch=>({
    clearItem:item=>dispatch(ClearItemFromCart(item)),
    additems:item=> dispatch(Additem(item)),
    RemoveItemcarts:item=> dispatch(RemoveItemcart(item))
})
export default connect(null,mapDispatchToProps)(CheckOutItem);