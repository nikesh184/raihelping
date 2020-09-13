import React from 'react';

import './cartItmes.style.scss';

const CartItme =({item:{name , price, imageUrl,quantity }})=>(
    <div className="cart-item">
           <img src={imageUrl} alt="not fount" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="">{quantity}*{price}</span>
        </div>

    </div>
);
export default CartItme;