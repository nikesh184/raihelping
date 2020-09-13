import cartActionType from './cart.action.type';

const ToggleCaHidden =()=>({
    type:cartActionType.TOGGLE_CART_HIDDEN
})
export default ToggleCaHidden;

export const Additem =(item)=>({
    type:cartActionType.ADD_ITEM,
    payload:item
});
export const ClearItemFromCart =(item)=>({
    type:cartActionType.CLEAR_ITEM_FROM_CART,
    payload:item
});
 export const RemoveItemcart =(item)=>({
     type:cartActionType.REMOVE_ITEM,
     payload:item
 })
