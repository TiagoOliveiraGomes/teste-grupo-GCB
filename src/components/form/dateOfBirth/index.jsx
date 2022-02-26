import React from "react";
import InputForm from "../inputForm";

const DateOfBirth = (props) => {
    const {onChangeDay, onChangeMonth, onChangeYear, day, month, year} = props

    return (
        <div className="flex">
            <InputForm onChange={onChangeDay} text="Dia" placehold="30" mask="99" value={day} maxValue={31} type="number"/>
            <InputForm onChange={onChangeMonth} text="Mês" placehold="12" mask="99" value={month} maxValue={12} type="number"/>
            <InputForm onChange={onChangeYear} text="Ano" placehold="2022" mask="9999" value={year} type="number"/>
        </div>
    )
}

export default DateOfBirth;