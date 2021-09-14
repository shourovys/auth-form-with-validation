import styled from "styled-components";

//form styles
export const FormContainer = styled.section`
  flex: 2 1 50%;
  color: #575757;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({isOldUser})=>isOldUser?'6rem':'2rem'} ;

  @media screen and (max-width: 680px) {
    margin-top: 3rem;
  }

  & h1 {
    margin-bottom: 4px;
    font-size: 18px;
  }
  & > p {
    font-size: 12px;
    margin-bottom: 2rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1rem;

    & div {
      display: flex;
      align-items: center;
      gap: 2px;
    }

    & label {
      font-size: 12px;
    }

    & P {
      margin-bottom: 0;
      color: #61acb3;
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  min-width: 240px;
  border-radius: 50px;
  padding: 5px 0;
  margin-bottom: 1rem ;
  margin-top: .5rem;
  border: none;
  outline: none;
  color: white;
  background-color: #61acb3;
  cursor: pointer;
`;

export const Pointer = styled.p`
  cursor: pointer;
`;

export const Footer = styled.p`
  margin-top: ${({isOldUser})=>isOldUser?'3rem':'.8rem'} ;
  margin-bottom: 0px !important;
  @media screen and (max-width: 680px) {
    margin-top: 1.5rem;
  }
`;

//form item styles
export const FormItemStyles = styled.input`
  display: block;
  outline: none;
  border: 0;
  border-radius: 0;
  border-bottom: ${({errorData})=>errorData? '1px solid red' : '1px solid #a9a9a9'} ;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  min-width: 240px;
`;
