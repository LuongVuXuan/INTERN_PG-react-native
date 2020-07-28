import React, {useState} from 'react';
import styled from 'styled-components/native';
import {View, Button, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const BackgroundTitle = styled.View`
  width: 100%;
  background-color: tomato;
  padding-top: 10;
  padding-bottom: 10;
  border-bottom-right-radius: 20;
  border-bottom-left-radius: 20;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 25;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const LoginTitle = styled.Text`
  font-size: 16;
  font-weight: bold;
`;

const LoginInput = styled.TextInput`
  height: 40;
  border-bottom-width: 1;
  margin-bottom: 10;
`;

interface Props {}

const LoginScreen = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleOnPress = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('UserList');
    } else {
      if (password == '') Alert.alert('Nhap password please!');
      else {
        Alert.alert('Sai pass or user ko ton tai!');
        setPassword('');
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <BackgroundTitle>
        <Title>Login Screen</Title>
      </BackgroundTitle>
      <View
        style={{justifyContent: 'center', marginTop: 20, marginHorizontal: 10}}>
        <LoginTitle>Username:</LoginTitle>
        <LoginInput
          placeholder={'User Name'}
          onChangeText={(text) => setUsername(text)}
          value={username}></LoginInput>
        <LoginTitle>Password:</LoginTitle>
        <LoginInput
          placeholder={'Password'}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}></LoginInput>
        <Button title={'Submit'} onPress={handleOnPress} />
      </View>
    </View>
  );
};

export default LoginScreen;
