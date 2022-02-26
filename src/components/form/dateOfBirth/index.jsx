import React from "react";
import InputForm from "../inputForm";

const DateOfBirth = () => {
    return (
        <div className="flex">
            <InputForm text="Dia" placehold="30" mask="99" />
            <InputForm text="Mês" placehold="12" mask="99" />
            <InputForm text="Ano" placehold="2022" mask="9999" />
        </div>
    )
}

export default DateOfBirth;