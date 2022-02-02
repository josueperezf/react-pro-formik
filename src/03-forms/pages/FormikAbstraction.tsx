import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {
    // si quiero hacer un trim por ejemplo, puedo colcar un useEffect que se active cuando cambie el valor y alli hago el trim o las llamadas al servidor si lo necesitp
    return (
        <div>
            <h1>Formic Abstraction Tutorial</h1>

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
                    // (formik) => (
                    ({ values, setFieldValue }) => (
                        <Form >
                            {JSON.stringify(values)}
                            <label htmlFor='nombre'> Primer Nombre</label>
                            <Field type='text' id='nombre' name='nombre'/>
                            <ErrorMessage name='nombre' component='span' />

                            {
                                /*
                                    la siguiente linea y el bloque de tres lineas anterior hacen exactamente lo mismo,
                                    y este es mas corto, dejo en anterior para que me sirve de referencia
                                */
                            }
                            <MyTextInput label={'Apellido'} name={'apellido'} placeholder='Ingrese apellido' />

                            <MyTextInput label={'Email'} name={'email'} type='email' placeholder='Ingrese su correo' />

                            {/* <label htmlFor='cargo'> tipo de trabajo</label>
                            <Field as='select' id='cargo' name='cargo'>
                                <option value=''>Seleccione</option>
                                <option value='desarrollador'>Desarrollador</option>
                                <option value='disenador'>Diseñador</option>
                                <option value='it-jr'>It jr</option>
                            </Field>
                            <ErrorMessage name='cargo' component='span'/> */}
                            {/*  lo comentado es exactamente igual a lo siguiente */}
                            <MySelect as='select' id='cargo' name='cargo' label={'Tipo de trabajo'}>
                                <option value=''>Seleccione</option>
                                <option value='desarrollador'>Desarrollador</option>
                                <option value='disenador'>Diseñador</option>
                                <option value='it-jr'>It jr</option>
                            </MySelect>

                            {/* <label>
                                <Field type='checkbox' id='terminos' name='terminos' />
                                Terminos y condiciones
                            </label>
                            <ErrorMessage name='terminos' component='span'/> */}
                            <MyCheckbox label={'Terminos y condiciones'} name={'terminos'} />
                            <button onClick={()=>setFieldValue('nombre', 'Josue')} type='button'>Colocar el texto josue en el input nombre</button>
                            <button type='submit'> Guardar</button>

                        </Form>
                    )
                }
            </Formik>
            
        </div>
    );
};
