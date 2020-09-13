import {createSelector} from 'reselect';

const selectCart = state=>state.cart;

export const selectCartItems =createSelector(
    [selectCart],
    cart=>cart.cartItems
);
export const selectcarthidden = createSelector(
    [selectCart],
    cart=>cart.hidden
);
export const cartItemsCount =createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce(
        (accumalatedquantity , cartItem)=>accumalatedquantity+cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce(
        (accumalatedquantity , cartItem)=>accumalatedquantity+cartItem.quantity*cartItem.price, 0)
)