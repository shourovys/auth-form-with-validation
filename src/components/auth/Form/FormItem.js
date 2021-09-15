import React from "react";
import { FormItemStyles } from "./Form.styles";

const FormItem = ({ name, placeHolder, handelBlur, errorData, type }) => {
  return (
    <FormItemStyles
      autocomplete="off"
      onBlur={(e) => handelBlur(e)}
      name={name}
      placeholder={placeHolder}
      type={type}
      errorData={errorData}
    />
  );
};

export default FormItem;
