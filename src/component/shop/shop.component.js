import React from 'react';
import {Route} from 'react-router-dom';

import CollectionPage from '../../pages/collectionpage/collection.page';
import CollectionOvetview from '../collection.overview/collection.overview';
const Shop = ({match})=>(
            <div className="shop-page">
              <Route exact path={`${match.path}`} component={CollectionOvetview} />
              <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
);

export default Shop ;