import React from 'react';
import './cart-icon.style.scss';
import {cartItemsCount} from '../../redux/cart/cart.selector'

import ToggleCaHidden from '../../redux/cart/cart.action';
import {connect} from "react-redux";

import {createStructuredSelector} from 'reselect';

import  Image from '../assist/carticon.png';

const CartIcon =({ToggleCaHidden, itemCount})=>(
    <div className="cart-icon" onClick={ToggleCaHidden} >
        <img  src={Image} alt="not found" className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)
const mapDispatchToProps =dispatch=>({
    ToggleCaHidden: ()=>dispatch(ToggleCaHidden())
});

const mapStateToProps =createStructuredSelector({
    itemCount:cartItemsCount

});
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);