import styled from "styled-components";

//flex container
export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  transition: all .5s;
`;

//side image styles
export const SideImageContainer = styled.div`
  flex: 1 2 50%;
  overflow: hidden;
  max-height: 100vh;

  @media screen and (max-width: 680px) {
    display: none;
  }
`;

export const SideImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  object-fit: cover;
`;
