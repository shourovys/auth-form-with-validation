import React from 'react';
import { FormItemStyles } from './Form.styles';

const FormItem = ({name,placeHolder, handelBlur,errorData}) => {
    
    return (
        <FormItemStyles onBlur={(e)=>handelBlur(e)} name={name} placeholder={placeHolder} type='text' errorData={errorData}/>
    );
};

export default FormItem;