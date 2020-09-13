import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/Shop/shopSelector';

import Collection from '../collection/collectionpreview';
import './collection.overview.style.scss';

const CollectionOvetview =({shopdata})=>(
    <div className='collection-overview'>
        {
            shopdata.map( ({id , ...othercollectionprops}) =>(
                <Collection key={id} {...othercollectionprops} />
            ))
        }
    </div>
)
const mapStateToProps =createStructuredSelector({
 shopdata:selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOvetview)