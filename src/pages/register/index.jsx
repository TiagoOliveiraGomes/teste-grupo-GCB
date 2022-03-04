import React from 'react'
import './register.css'
import NavHeader from '../../components/navHeader';
import Form from '../../components/form';

const Register = () => {
    return (
        <div className='Container-register'>
            {/* TODO: Consertar validação de CPF (numero válido) */}
            <NavHeader/>
            <Form />
        </div>
    )
}

export default Register;