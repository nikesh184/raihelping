import SHOP_DATA from './shop.Data';
const INITIAL_STATE={
    shopdata:SHOP_DATA
};

const ShopeReducer =(state=INITIAL_STATE , action)=>{
    switch(action.type){
        default:
            return state
    }
};
export default ShopeReducer;