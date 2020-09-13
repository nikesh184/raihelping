import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySelector} from '../../redux/directory/directorySelector'
import "./directory.scss"
import Menuitmes from '../menu-item/menu-itmes'
const  Directory =({selector})=> (
            <div className="directory-menu">
                {
                    selector.map(({id , ...othersectionProps})=>(
                        <Menuitmes key={id} {...othersectionProps}/>
                    ))
                }
            </div>
);

const maStateToProps =createStructuredSelector({
selector:selectDirectorySelector
})
export default connect(maStateToProps)(Directory);
