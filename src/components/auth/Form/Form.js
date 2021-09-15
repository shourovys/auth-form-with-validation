import React, { useState } from "react";
import openNotification from "../../../helper/notification";
import useLocalStorage from "../../../hook/useLocalStorage";
import FormValidation from "../../../validation/FormValidation";
import { Button, Footer, FormContainer, Pointer } from "./Form.styles";
import FormItem from "./FormItem";

const Form = () => {
  const [isOldUser, setIsOldUser] = useState(true);
  const [formData, setFormData] = useState({});
  const [errorData, setErrorData] = useState({});

  const [users, setUser] = useLocalStorage("users", []);
  console.log("🚀 ~ file: Form.js ~ line 13 ~ Form ~ user", users);

  const handelBlur = (e) => {
    //checking input value
    const newErrorValue = FormValidation(e.target.name, e.target.value);
    setErrorData((errorData) => ({ ...errorData, ...newErrorValue }));

    //setting input value in state
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const recheckUserInput = () => {
    // checking input value on submit
    let newErrorObj = {};
    for (const key in formData) {
      const value = formData[key];
      const errorValue = FormValidation(key, value);
      newErrorObj = { ...newErrorObj, ...errorValue };
    }
    setErrorData(newErrorObj);
  };

  const checkUser = ({ email, password }) => {
    const isUser = users.find((user) =>
      user.email === email && user.password === password ? user : null
    );
    console.log(isUser);
  };

  const login = (e) => {
    e.preventDefault();
    recheckUserInput();
    const { email, password } = formData;
    if ((!email, !password)) {
      return openNotification("error", "All input value not given");
    }
    if (!errorData.email || !errorData.password) {
      return checkUser(formData)
    }
    return ;
  };

  const signUp = (e) => {
    e.preventDefault();
    recheckUserInput();
    const { name, phone, email, password } = formData;
    if ((!name || !phone || !email || !password)) {
      return openNotification("error", "All input value not given");
    }
    if (!errorData.name || !errorData.phone || !errorData.email || !errorData.password) {
      return setUser(formData)
    }
    return ;
  };

  return (
    <FormContainer isOldUser={isOldUser}>
      <h1>Welcome Back!</h1>
      <p>Please login to your account</p>
      <form autoComplete="off" action="">
        {!isOldUser && (
          <>
            <FormItem
              name="name"
              placeHolder="Username"
              handelBlur={handelBlur}
              errorData={errorData.name}
              type="text"
            />

            <FormItem
              name="phone"
              placeHolder="Phone number"
              handelBlur={handelBlur}
              errorData={errorData.phone}
              type="number"
            />
          </>
        )}
        <FormItem
          name="email"
          placeHolder="Email"
          handelBlur={handelBlur}
          errorData={errorData.email}
          type="email"
        />

        <FormItem
          name="password"
          placeHolder="Password"
          handelBlur={handelBlur}
          errorData={errorData.password}
          type="password"
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

        {isOldUser ? (
          <Button onClick={login}>Login</Button>
        ) : (
          <Button onClick={signUp}>Sign Up</Button>
        )}
      </form>

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
