import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  id: string;
  // createdAt: Date;
  name: string;
  // email: string;
  username: string;
  balance: string;
}

const UserInfo = styled.TouchableOpacity`
  margin-vertical: 10;
  margin-horizontal: 10;
  border-width: 1;
  padding-horizontal: 5;
`;

const UserDetails = ({id, name, username, balance}: Props) => {
  const handleOnPress = (id) => {
    console.log(`Press !!! +  ${id}`);
  };

  return (
    <UserInfo
      onPress={() => {
        handleOnPress(id);
      }}>
      <Text>Name: {name}</Text>
      <Text>Username: {username}</Text>
      <Text>Balance: {balance}</Text>
    </UserInfo>
  );
};

export default UserDetails;
