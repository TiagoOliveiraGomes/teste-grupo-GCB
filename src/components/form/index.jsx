import React, { useEffect, useState } from 'react'
import './form.css'
import Cookies from 'universal-cookie'
import InputForm from './inputForm'
import DateOfBirth from './dateOfBirth'
// import {consultarCep} from 'correios-brasil'

const Form = () => {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState(0)
    const [day, setDay] = useState(null)
    const [month, setMonth] = useState(null)
    const [year, setYear] = useState(null)
    const [cep, setCep] = useState(0)
    const [street, setStreet] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [focusOut, setFocusOut] = useState(false)
    const [cepError, setCepError] = useState(true)
    const [disabled, setDisabled] = useState(false)
    const cookies = new Cookies();

    useEffect(()=> {
        async function getLocation () {
            const url = `https://viacep.com.br/ws/${cep}/json/`
            const response = await fetch(url)
            response && setCepError(false)
            const data = await response.json()
            console.log(data.logradouro)
            setStreet(data.logradouro)
            setState(data.uf)
            setCity(data.localidade)
            setDisabled(true)
        }
        if(`${cep}`.length >7){
            getLocation()
        }
        
    }, [focusOut])

    function pressRegisterButton () {
        const objectUserData = {
            name: name,
            cpf:cpf,
            birthDate: `${day}/${month}/${year}`,
            cep: cep,
            street: street,
            city: city,
            state: state,
        }
        if(!name)return alert("Nome inválido!")
        if(!cpf)return alert("cpf inválido!")
        if(+day > 32 || !day)return alert("dia inválido!")
        if(+month > 32 || !month)return alert("mês inválido!")
        if(!year)return alert("ano inválido!")
        if(`${cep}`.length < 8 || !cep)return alert("Cep inválido!")
        localStorage.setItem("DataUser", JSON.stringify(objectUserData))
        cookies.set("DataUser", JSON.stringify(objectUserData))
        alert("Usuario Registrado!")
    }
    

    return (
        <div className='container-form'>
            <InputForm onChange={setName} text="Nome" placehold="Ex. John Doe" />
            <InputForm onChange={setCpf} text="CPF" placehold="Ex. 999 999 999 99" mask="999 999 999 99" />
            <h3 className='aux-tittle-BirthDate'>Data de Nascimento</h3>
            <DateOfBirth day={day} month={month} year={year} onChangeDay={setDay} onChangeMonth={setMonth} onChangeYear={setYear} />
            <InputForm onChange={setCep} focusOut={{focusOut, setFocusOut}} text="CEP" placehold="Ex. 13165-000" mask="99999-999" />
            <InputForm onChange={setStreet} text="Rua" placehold="Ex. 999 999 999 99" value={street} disabled={disabled}/>
            <InputForm onChange={setState} text="Estado" placehold="Ex. 999 999 999 99" value={state} disabled={disabled}/>
            <InputForm onChange={setCity} text="Cidade" placehold="Ex. 999 999 999 99" value={city} disabled={disabled}/>
            <button onClick={pressRegisterButton}>Registrar</button>
        </div>
    )
}

export default Form;