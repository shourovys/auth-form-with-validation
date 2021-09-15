import React from "react";
import { Container, SideImage, SideImageContainer } from "../Auth/Auth.styles";

const ImageLayout = ({ children }) => {
  return (
    <Container>
      <SideImageContainer>
        <SideImage
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
          alt=""
        />
      </SideImageContainer>
      {children}
    </Container>
  );
};

export default ImageLayout;
