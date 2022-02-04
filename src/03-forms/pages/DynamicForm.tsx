import React from 'react';
import { Form, Formik } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json'
import * as Yup from 'yup';

const initialValues: {[key:string]: any} = {};
const requiredFields: {[key:string]: any} = {};

for (const input of formJson ) {
    initialValues[input.name] = input.value;
    // agregar las validaciones
    if (!input.validations) continue;
    // si hace las siguientes lineas es por que tiene validaciones, el continue lo que hace es avanzar a la siguiente iteracion del ciclo
    let schema = Yup.string();
    for (const rule of input.validations ) {
        if (rule.type === 'required') {
            schema = schema.required(rule.msg)
        }
        if (rule.type === 'min') {
            schema = schema.min((rule as any).value || 2, `${rule.msg} ${(rule as any).value || 2} caracteres`)
        }
        if (rule.type === 'max') {
            schema = schema.max((rule as any).value || 50, `${rule.msg} ${(rule as any).value || 50} caracteres`)
        }
        if (rule.type === 'email') {
            schema = schema.email(rule.msg)
        }
    }
    requiredFields[input.name] = schema
}

const vadationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(formulario)=> console.log(formulario)}
                validationSchema={vadationSchema}
            >
                {
                    (formik) => {
                        
                        return (
                            <Form noValidate >
                                {
                                    formJson.map(({ type, name, placeholder, label, options}) => {
                                        if (['text', 'password', 'email'].includes(type)) {
                                            return <MyTextInput key={name} type={(type as any)} name={name} label={label} placeholder={placeholder} />
                                        } else if (type === 'select') {
                                            return (
                                                <MySelect key={type} label={label} name={name}>
                                                    <option value=''>Select an option</option>
                                                    {
                                                        options?.map(({id, label}) => (
                                                            <option key={id} value={id}>{label}</option>
                                                        ))
                                                    }
                                                </MySelect>
                                            )
                                        }
                                        throw new Error(`El tipo ${type},no es soportado`)
                                    })
                                }
                                <button type='submit'> Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    );
};
