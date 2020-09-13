import React from 'react';


import './form-input.scss'

const Frominput =({handelChang,label , ...otherProps})=>(

    <div className="group">
        <input className="form-input" onChange={handelChang} {...otherProps}/>
        {
            label ?( 
                <label className={`${otherProps.value.length ? 'shrink' :""} form-input-label`}>
                    {label}
                </label>) 
            :null     
        }
    </div>
)
export default Frominput;
