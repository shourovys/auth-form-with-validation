import React from 'react';
import { FormItemStyles } from './Form.styles';

const FormItem = ({placeHolder}) => {
    return (
        <FormItemStyles placeholder={placeHolder} type='text'/>
    );
};

export default FormItem;