import React from 'react';

export const Container = ({variant = "mid",children})=>{
    return(
        <div className={[variant+"Container"]}>{children}</div>
    )
}

export default Container;