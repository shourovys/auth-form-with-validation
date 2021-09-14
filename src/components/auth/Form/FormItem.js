import React from 'react';
import { FormItemStyles } from './Form.styles';

const FormItem = ({name,placeHolder,  handelBlur}) => {
    return (
        <FormItemStyles onBlur={(e)=>handelBlur(e)} name={name} placeholder={placeHolder} type='text' required/>
    );
};

export default FormItem;