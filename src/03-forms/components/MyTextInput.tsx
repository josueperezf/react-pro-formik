import { useField, ErrorMessage } from 'formik';

// [x: string]: any con esto le decimos que puede recibir cualquier otro paramtro y que es del tipo any
// [x: string]: es opcional sin necesidad de colocarselo, seria una propiedad computada

interface Props {
    id?: string,
    label: string,
    name: string,
    type?: 'text' | 'email' | 'password',
    placeholder? : string,
    [x: string]: any
}
export const MyTextInput = ({ label, ...props }: Props) => {
    const [field
        // , meta
    ] = useField(props)
    return (
        <>
            <label htmlFor={props.id || props.name}> {label}</label>
            <input className="text-input" {...field} {...props} />
            <ErrorMessage name={props.name} component='span' />
            {/* {
                (meta.touched && meta.error) && <span className="error">{meta.error}</span>
            } */}
        </>
    );
};
