import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import CheckOutItem from '../checkoutItems/checkoutItem';
import StripeCheckoutButton from '../stripe-Button/stripe.component';

import {selectCartTotal} from '../../redux/cart/cart.selector';
import {selectCartItems} from '../../redux/cart/cart.selector';
import './checkout.style.scss';

const Checkout =({cartItems,total})=>(

    <div className='checkout-page'>
       <div className='checkout-header'>
           <div className='header-block'>
                <span>Product</span>
           </div>
           <div className='header-block'>
                <span>Description</span>
           </div>
           <div className='header-block'>
                <span>Quantity</span>
           </div>
           <div className='header-block'>
                <span>Price</span>
           </div>
           <div className='header-block'>
                <span>Remove</span>
           </div>
       </div>
       {
           cartItems.map(cartItem=> <CheckOutItem key={cartItem.id} item={cartItem}/>)
       }
       <div className='total'>
            <span>Total:${total} </span>
       </div>
       <StripeCheckoutButton price={total}/>
    </div>
);
const mapStateToProps =createStructuredSelector({
    total:selectCartTotal,
    cartItems:selectCartItems
})

export default connect(mapStateToProps)(Checkout);