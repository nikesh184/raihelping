import {createSelector} from "reselect";

const selectShop =state => state.shop;
 export const selectShopItem =createSelector(
     [selectShop],
     shop=>shop.shopdata
 );

 export const selectCollectionForPreview = createSelector(
     [selectShopItem],
     shopdata=>Object.keys(shopdata).map(key=>shopdata[key])
 );
export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopItem],
        shopdata=>shopdata[collectionUrlParam]
    )

