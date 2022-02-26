import React from "react";
import './inputForm.css'
import ReactInputMask from "react-input-mask";

const InputForm = (props) => {

    function focusOut () {
        props.focusOut.setFocusOut(!props.focusOut.focusOut)
    }

    function onChange (e) {
        props.onChange(e.target.value)
    }
    
    return (
        <div className="inputForm">
            <h3>{props.text}</h3>
             <ReactInputMask onChange={onChange} onBlur={props.focusOut&& focusOut} mask={props.mask} placeholder={props.placehold} />
        </div>
    )
}

export default InputForm;