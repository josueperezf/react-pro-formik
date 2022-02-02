import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
    
    return (
        <div>
            <h1>Formic Component Tutorial</h1>

            <Formik
                initialValues={{
                        nombre: '',
                        apellido: '',
                        email: '',
                        terminos: false,
                        cargo: ''
                    }}
                
                onSubmit={(formulario)=>{console.log(formulario)}}
                // Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones') es para decirle que los unico valores que yo quiero que tenga son los que este en ese array, en este caso solo true
                validationSchema= {
                    Yup.object({
                        nombre: Yup.string().trim().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
                        apellido: Yup.string().trim().max(20, 'Debe tener 20 caracteres o menos').required('Requerido'),
                        email: Yup.string().trim().email('Debe ser un correo valido').max(30, 'Debe tener 30 caracteres o menos').required('Requerido'),
                        terminos: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                        cargo: Yup.string().notOneOf(['it-jr'], 'Esta opcion no es permitida').required('Requerido'),
                    })
                }
            >
                {
                    (formik) => (
                        <Form >
                            <label htmlFor='nombre'> Primer Nombre</label>
                            <Field type='text' id='nombre' name='nombre'/>
                            <ErrorMessage name='nombre' component='span' />


                            <label htmlFor='apellido'> Apellido</label>
                            <Field type='text' id='apellido' name='apellido' />
                            <ErrorMessage name='apellido' component='span' />

                            <label htmlFor='email'> Email</label>
                            <Field type='email' id='email' name='email' />
                            <ErrorMessage name='email' component='span'/>

                            <label>
                                <Field type='checkbox' id='terminos' name='terminos' />
                                Terminos y condiciones
                            </label>
                            <ErrorMessage name='terminos' component='span'/>

                            <label htmlFor='cargo'> tipo de trabajo</label>
                            <Field as='select' id='cargo' name='cargo'>
                                <option value=''>Seleccione</option>
                                <option value='desarrollador'>Desarrollador</option>
                                <option value='disenador'>Diseñador</option>
                                <option value='it-jr'>It jr</option>
                            </Field>
                            <ErrorMessage name='cargo' component='span'/>


                            <button type='submit'> Guardar</button>
                        </Form>
                    )
                }
            </Formik>
            
        </div>
    );
};
