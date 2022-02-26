import React from "react";
import './inputForm.css'
import ReactInputMask from "react-input-mask";

const InputForm = (props) => {
    const maxValue = props.maxValue
    const {type} = props.type  || "text"

    function focusOut () {
        props.focusOut.setFocusOut(!props.focusOut.focusOut)
    }

    function onChange (e) {
        if(+e.target.value > maxValue){
            props.onChange(maxValue)    
        }else {
            props.onChange(e.target.value)
        }
        // props.onChange(e.target.value)
    }
    
    return (
        <div className="inputForm">
            <h3>{props.text}</h3>
             <ReactInputMask type={type} disabled={props.disabled} onChange={onChange} onBlur={props.focusOut&& focusOut} mask={props.mask} placeholder={props.placehold} value={props.value} />
        </div>
    )
}

export default InputForm;