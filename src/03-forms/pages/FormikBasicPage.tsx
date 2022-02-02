import { FormikErrors, useFormik } from 'formik';
import React from 'react';

import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({firstName, lastName, email}: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!firstName) {
            errors.firstName = 'Required'
        } else if (firstName.length > 15) {
            errors.firstName = 'Debe ser de 15 caracteres o menos'
        }

        if (!lastName) {
            errors.lastName = 'Required'
        } else if (lastName.length > 10) {
            errors.lastName = 'Debe ser de 10 caracteres o menos'
        }

        if (!email) {
            errors.email = 'Required'
        } else if (email.length > 30) {
            errors.email = 'Debe ser de 30 caracteres o menos'
        }
        if (!email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Correo invalido';
          }

        return errors;
    }
    const {handleChange, handleSubmit, handleBlur, values, errors, touched} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: formulario => {console.log(formulario)},
        validate
    })
    
    return (
        <div>
            <h1>Formic Basic Tutorial</h1>

            <form noValidate onSubmit={handleSubmit}>

                <label htmlFor='firstName'> Primer Nombre</label>
                <input type='text' id='firstName' name='firstName' value={values.firstName} onChange={ handleChange } onBlur={handleBlur} />
                { (touched.firstName && errors.firstName) && <span>{errors.firstName}</span> }

                <label htmlFor='lastName'> Apellido</label>
                <input type='text' id='lastName' name='lastName' value={values.lastName} onChange={ handleChange } onBlur={handleBlur}/>
                { (touched.lastName && errors.lastName) && <span>{errors.lastName}</span> }

                <label htmlFor='email'> Email</label>
                <input type='email' id='email' name='email' value={values.email} onChange={ handleChange } onBlur={handleBlur}/>
                { (touched.email && errors.email) && <span>{errors.email}</span> }

                <button type='submit'> Guardar</button>
            </form>
        </div>
    );
};
