import styled from "styled-components";

//flex container
export const UserContainer = styled.section`
  flex: 2 1 50%;
  transition: all 0.5s;
  text-align: center;
  & > h1 {
    margin-top: 2rem;
    font-size: 1.5rem;
  }
`;

export const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

//user card styles
export const UserCardContainer = styled.div`
  box-shadow: 0 0 5px lightgray;
  padding: 2rem;
  margin: 1rem;
  text-align: center;
`;
