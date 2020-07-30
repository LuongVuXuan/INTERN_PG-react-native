import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

interface Props {
  id: string;
  name: string;
  username: string;
  balance: string;
  // createdAt: Date;
  // email: string;
}

const UserInfo = styled.TouchableOpacity`
  margin-vertical: 10;
  margin-horizontal: 10;
  border-width: 1;
  padding-horizontal: 5;
`;

const UserDetails = ({id, name, username, balance}: Props) => {
  const navigation = useNavigation();
  const handleOnPress = (id: string) => {
    // console.log(`Press !!! +  ${id}`);
    navigation.navigate('UserDetail', {id});
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
