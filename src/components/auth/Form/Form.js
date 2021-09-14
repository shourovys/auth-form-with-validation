import React, { useState } from "react";
import FormValidation from "../../../validation/FormValidation";
import { Button, Footer, FormContainer, Pointer } from "./Form.styles";
import FormItem from "./FormItem";

const Form = () => {
  const [isOldUser, setIsOldUser] = useState(true);
  const [formData, setFormData] = useState({});
  const [errorData, setErrorData] = useState({})
  console.log("🚀 ~ file: Form.js ~ line 10 ~ Form ~ errorData", errorData)

  const handelBlur = (e) => {
    //checking input value
    const newErrorValue = FormValidation(e.target.name, e.target.value,)
    setErrorData(errorData=>({...errorData,...newErrorValue}))
    
    //setting input value in state
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
    
    //checking input value
    // let newErrorList = [];
    // for (const key in formData) {
    //   const value = formData[key];
    //   const errorValue = FormValidation(key, value)
    //   errorValue && newErrorList.push(errorValue);
    // }
    // setError(newErrorList);
  };

  return (
    <FormContainer isOldUser={isOldUser}>
      <h1>Welcome Back!</h1>
      <p>Please login to your account</p>
      <FormItem name="name" placeHolder="Username" handelBlur={handelBlur} />
      {!isOldUser && (
        <>
          <FormItem
            name="phone"
            placeHolder="Phone number"
            handelBlur={handelBlur}
          />
          <FormItem name="email" placeHolder="Email" handelBlur={handelBlur} />
        </>
      )}
      <FormItem
        name="password"
        placeHolder="Password"
        handelBlur={handelBlur}
      />

      {isOldUser && (
        <div>
          <div>
            <input
              type="checkbox"
              id="remember"
              name="remember"
              value="remember"
            ></input>
            <label for="remember"> Remember me</label>
          </div>
          <p>Forget Password</p>
        </div>
      )}
      {!isOldUser && (
        <div>
          <div>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              value="agree"
            ></input>
            <label for="agree">Agree with terms of use</label>
          </div>
        </div>
      )}

      <Button>Login</Button>
      {isOldUser ? (
        <Pointer onClick={() => setIsOldUser(false)}>Create a account</Pointer>
      ) : (
        <Pointer onClick={() => setIsOldUser(true)}>
          Already have a account. Login
        </Pointer>
      )}

      <Footer>Terms of use. Privacy policy</Footer>
    </FormContainer>
  );
};

export default Form;
