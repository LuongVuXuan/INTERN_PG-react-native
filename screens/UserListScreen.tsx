import React, {useEffect, useState} from 'react';
import {BackgroundTitle, Title} from './LoginScreen';
import {FlatList, View, Text} from 'react-native';
import UserDetails from '../components/UserDetails';

interface Props {}

interface IUser {
  id: string;
  name: string;
  username: string;
  balance: string;
  // email: string;
  // createdAt: Date;
  // factor_authentication: boolean;
  // user_ref: string;
}

const UserListScreen = (props: Props) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch('https://5f0c22f99d1e150016b37d39.mockapi.io/api/v1/users/')
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  const renderItem = ({item}) => {
    return users ? (
      <UserDetails
        id={item.id}
        name={item.name}
        username={item.username}
        balance={item.balance}
      />
    ) : (
      <View>
        <Text>Waitting</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <BackgroundTitle>
        <Title>UserListScreen</Title>
      </BackgroundTitle>
      {/* <Button title="Back" onPress={() => console.log('a')} /> */}
      <FlatList
        data={users.slice(10, 30)}
        renderItem={renderItem}
        keyExtractor={(item: IUser) => item.id}
      />
    </View>
  );
};

export default UserListScreen;
