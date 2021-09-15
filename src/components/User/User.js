import React from "react";
import useLocalStorage from "../../hook/useLocalStorage";
import ImageLayout from "../layout/ImageLayout";
import { CardContainer, UserContainer } from "./User.styles";
import UserCard from "./UserCard";

const User = () => {
  const [users, setUser] = useLocalStorage("users", []);

  return (
    <ImageLayout>
      <UserContainer>
        <h1>User List</h1>
        <CardContainer>
          {users.map((user) => (
            <UserCard user={user} />
          ))}
        </CardContainer>
      </UserContainer>
    </ImageLayout>
  );
};

export default User;
