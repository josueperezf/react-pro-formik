import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

    const { handleSubmit, getFieldProps, errors, touched} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: formulario => {console.log(formulario)},
        validationSchema: Yup.object({
            firstName: Yup.string().trim().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
            lastName: Yup.string().trim().max(20, 'Debe tener 20 caracteres o menos').required('Requerido'),
            email: Yup.string().trim().email('Debe ser un correo valido').max(30, 'Debe tener 30 caracteres o menos').required('Requerido'),
        })
    })
    
    return (
        <div>
            <h1>Formic Yup Tutorial</h1>
            {/*  getFieldProps a nuestro input le agrega la propiedad name, ademas de los evento handleChange, handleBlur etc  */}
            <form noValidate onSubmit={handleSubmit}>

                <label htmlFor='firstName'> Primer Nombre</label>
                <input type='text' id='firstName' {...getFieldProps('firstName')}  />
                { (touched.firstName && errors.firstName) && <span>{errors.firstName}</span> }

                <label htmlFor='lastName'> Apellido</label>
                <input type='text' id='lastName' {...getFieldProps('lastName')} />
                { (touched.lastName && errors.lastName) && <span>{errors.lastName}</span> }

                <label htmlFor='email'> Email</label>
                <input type='email' id='email' {...getFieldProps('email')} />
                { (touched.email && errors.email) && <span>{errors.email}</span> }

                <button type='submit'> Guardar</button>
            </form>
        </div>
    );
};
