import React, { useState } from "react";
import { Button, Footer, FormContainer, Pointer } from "./Form.styles";
import FormItem from "./FormItem";

const Form = () => {
  const [isOldUser, setIsOldUser] = useState(true);
  return (
    <FormContainer isOldUser={isOldUser}>
      <h1>Welcome Back!</h1>
      <p>Please login to your account</p>
      <FormItem placeHolder="Username" />
      {!isOldUser && (
        <>
          <FormItem placeHolder="Phone number" />
          <FormItem placeHolder="Email" />
        </>
      )}
      <FormItem placeHolder="Password" />

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
        <Pointer onClick={() => setIsOldUser(true)}>Already have a account. Login</Pointer>
      )}

      <Footer>Terms of use. Privacy policy</Footer>
    </FormContainer>
  );
};

export default Form;
