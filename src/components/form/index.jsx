import React, { useEffect, useState } from 'react'
import './form.css'
import InputForm from './inputForm'
import DateOfBirth from './dateOfBirth'
// import {consultarCep} from 'correios-brasil'

const Form = () => {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState(0)
    const [day, setDay] = useState(0)
    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)
    const [cep, setCep] = useState(0)
    const [focusOut, setFocusOut] = useState(false)

    useEffect(()=> {
        async function getLocation () {
            const url = `https://viacep.com.br/ws/${cep}/json/`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
        }
        if(`${cep}`.length >7){
            getLocation()
        }
    }, [focusOut])
    

    return (
        <div className='container-form'>
            <InputForm text="Nome" placehold="Ex. John Doe" />
            <InputForm text="CPF" placehold="Ex. 999 999 999 99" mask="999 999 999 99" />
            <h3 className='aux-tittle-BirthDate'>Data de Nascimento</h3>
            <DateOfBirth />
            <InputForm onChange={setCep} focusOut={{focusOut, setFocusOut}} text="CEP" placehold="Ex. 13165-000" mask="99999-999" />
            <InputForm text="Rua" placehold="Ex. 999 999 999 99"  />
            <InputForm text="Estado" placehold="Ex. 999 999 999 99"  />
            <InputForm text="Cidade" placehold="Ex. 999 999 999 99"  />
            <button>Registrar</button>
        </div>
    )
}

export default Form;