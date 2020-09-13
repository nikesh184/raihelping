import React from 'react';
import image from '../assist/home-page.png'
import { Link } from 'react-router-dom';
import {selectCurrentUser} from '../../redux/user/user.sellector';

import {createStructuredSelector} from 'reselect';
import {selectcarthidden} from '../../redux/cart/cart.selector';
import CartDroupdown from '../cartDroupdown/cartDeoupdown'
import CartIcon from '../cart-icon/cart-icon'

import {connect} from 'react-redux';
import {auth} from '.././../firebase/firebase'
import './header.style.scss'

const Header =({currentUser, hidden})=>(

    <div className="header">
        <Link  to='/' className="logo-container">
            <img src={image}  alt="not found"/>
        </Link>
        <div className="options">
            <Link  to='/shop' className="option">
                SHOP
            </Link>
            <Link to='/sigin' className="option">
                CONTAINT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={()=>auth.signOut()}> LOGOUT</div>
                :
                <Link className="option" to='/sigin'>SIGIN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDroupdown/>
        }
     
    </div>
)
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectcarthidden
})
   
export default connect(mapStateToProps)(Header);