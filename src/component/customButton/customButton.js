import React from 'react';

import './customButton.scss';

const CustomButton =({children , isGooglesignin,inverted ,...otherProps})=>(
    <button className={`${inverted ? 'inverted' :'' }${isGooglesignin ? 'google-sigin' :'' } custom-button`}  {...otherProps}>
        {children}
    </button>
)
export default CustomButton;
