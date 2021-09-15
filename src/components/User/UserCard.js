import React from 'react';
import { UserCardContainer } from './User.styles';

const UserCard = ({user}) => {
    const {name,email,phone}=user;
    return (
        <UserCardContainer>
            <h1>Name: {name}</h1>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
        </UserCardContainer>
    );
};

export default UserCard;