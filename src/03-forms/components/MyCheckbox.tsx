import { ErrorMessage, useField } from "formik";

// [x: string]: any con esto le decimos que puede recibir cualquier otro paramtro y que es del tipo any
// [x: string]: es opcional sin necesidad de colocarselo, seria una propiedad computada

interface Props {
    id?: string,
    label: string,
    name: string,
    [x: string]: any
}
export const MyCheckbox = ({ label, ...props }: Props) => {
    const [field
        // , meta
    ] = useField({...props, type: 'checkbox'})
    return (
        <>
            <label >
                <input className="text-input" type='checkbox'  {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component='span' />
            {/* {
                (meta.touched && meta.error) && <span className="error">{meta.error}</span>
            } */}
        </>
    );
};
