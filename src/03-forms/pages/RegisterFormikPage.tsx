import { Form, Formik } from 'formik';
import { MyTextInput } from '../components/MyTextInput';
import '../styles/styles.css';
import * as Yup from 'yup';

const initialForm = {
    name: '',
    email: '',
    password1: '',
    password2: '',
};
export const RegisterFormikPage = () => {
    
    return (
        <div>
            <h1>Register Formik page</h1>

            <Formik
                initialValues={initialForm}
                onSubmit={(formulario)=>{console.log(formulario)}}
                validationSchema={Yup.object({
                    name: Yup.string().trim().min(2,'debe contener minino 2 caracteres').max(15,'longitud maxima 15 caracteres!').required('requerido'),
                    email: Yup.string().trim().email('Debe ser un correo valido!').required('requerido'),
                    password1: Yup.string().trim().min(6,'debe contener minino 6 caracteres, sin espacios en blanco').required('requerido'),
                    password2: Yup.string().oneOf([Yup.ref('password1')], 'Las contraseñas deben ser iguales').required('requerido'),
                })}
            >
                {
                    
                    ({values, getFieldProps, handleReset})=> {
                        
                        return (

                            <Form>
                                
                                <MyTextInput label={''} name={'name'} placeholder='Nombre' />

                                <MyTextInput label={''} name={'email'} placeholder='Correo electronico' />

                                <MyTextInput label={''} name={'password1'} type='password' placeholder='Password' />

                                <MyTextInput label={''} name={'password2'} type='password' placeholder='Confirmar Password' />

                                <button type='submit'> Create</button>

                                <button onClick={handleReset} >Reset</button>
                            </Form>

                        )
                    }
                }

            </Formik>

        </div>
    );
};
