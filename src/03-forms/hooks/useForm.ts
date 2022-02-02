import React, { useState } from 'react';

export const useForm = <T>(initialForm: T) => {
    const [formulario, setFomulario] = useState(initialForm);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFomulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }
    const reset = () => {
        setFomulario(initialForm)
    }
    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
  return {
    ...formulario,
    formulario,
    isValidEmail,
    onChange,
    reset
  };
};
