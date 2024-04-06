import React, {useState} from 'react';

export const Input = ({startIcon,endIcon,containerClassName,label,isError,...props})=>{
    const [isPasswordOpen,setIsPasswordOpen] = useState(false)
    return(
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {label && <label className={label} style={{width: "100%"}}>{label}</label>}
            <div style={{position: "relative"}} className={`inputContainer${containerClassName}`}>
                <div className={"startIcon"}>
                    {startIcon}
                </div>
                <input
                    className={`input${isError?"error":""}`}
                    {...props}

                    type={props.type==="password"?isPasswordOpen?"text": "password":props.type||"text"}
                />
                <div  style={{position: "absolute",right:0, bottom:0}} className={endIcon}>
                    {props.type ==="password"?
                        <div className="eye">
                            {isPasswordOpen?
                                <img onClick={()=>setIsPasswordOpen(false)}  src="" alt="openEye"/>
                                : <img onClick={()=>setIsPasswordOpen(true)}  src="" alt="closeEye"/>
                            }
                        </div>:endIcon
                    }
                </div>
            </div>
        </div>
    )
}