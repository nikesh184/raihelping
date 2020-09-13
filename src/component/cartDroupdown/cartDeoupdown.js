import React from 'react';
import CartItme from '../cartItmes/cartItmes.component';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {selectCartItems} from '../../redux/cart/cart.selector';

import ToggleCaHidden from '../../redux/cart/cart.action'
import './cartdroupdown.style.scss';
import CustomButton from '../customButton/customButton';

const CartDroupdown =({cartItems, history , dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
           {   cartItems.length ?( 
                cartItems.map(cartItem=> <CartItme key={cartItem.id} item={cartItem}/>)):
           <span className="droup">Your Cart is Empty</span>
        }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(ToggleCaHidden());
            }
        }>TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems
})
export default  withRouter(connect(mapStateToProps)(CartDroupdown));
