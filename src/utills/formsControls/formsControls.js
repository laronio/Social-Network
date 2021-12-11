import React from "react";
import classes from "./FormControls.module.css";
import { Field } from 'redux-form';

export const FormControl = ({input, meta: {touched, error}, children}) => {
    let formError = touched && error;
    return (
        <div className={formError ? classes.error : ""}>
            <div>
                {children}
            </div>
            {formError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, namee, component, validators, props = {}, text = "") => {
    return (
    <div>
        <Field placeholder={placeholder} name={namee} component={component} validate={validators} {...props} />{text}
    </div>
    )
}