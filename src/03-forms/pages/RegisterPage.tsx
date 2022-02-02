import React from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

const initialForm = {
    name: '',
    email: '',
    password1: '',
    password2: '',
};
export const RegisterPage = () => {
    const {formulario, name, email, password1, password2, isValidEmail, onChange, reset} = useForm(initialForm)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        console.log(formulario);
    }

    return (
        <div>
            <h1>Register page</h1>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='name' id='name' name='name' value={name} onChange={onChange} className={`${name.trim().length === 0 && 'has-error' }`} />
                { name.trim().length === 0 && <span>Este campo es obligatorio</span> }

                <input type='email' placeholder='email' name='email' value={email} onChange={onChange} className={`${!isValidEmail(email) && 'has-error' }`} />
                { !isValidEmail(email) && <span>Email no es valido</span> }

                <input type='password' placeholder='password' name='password1' value={password1} onChange={onChange} className={`${password1.trim().length === 0 && 'has-error' }`}/>
                { password1.trim().length === 0 && <span>Este campo es obligatorio</span> }
                { (password1.trim().length > 0 && password1.trim().length < 6) && <span>el password debe contener al menos 6 caracteres</span> }

                <input type='password' placeholder='repeat password' name='password2' value={password2} onChange={onChange} className={`${password2.trim().length === 0 && 'has-error' }`}/>
                { password2.trim().length === 0 && <span>Este campo es obligatorio</span> }
                { (password2.trim().length > 0 &&(password1 !== password2)) && <span>Las contraseñas deben ser iguales</span> }

                <button type='submit'> Create</button>

                <button onClick={reset} >Reset</button>
            </form>
        </div>
    );
};
