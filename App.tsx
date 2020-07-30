import React from 'react';

import LoginScreen from './screens/LoginScreen';
import UserListScreen from './screens/UserListScreen';
import UserDetailScreen from './screens/UserDetailScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="UserList" component={UserListScreen} />
          <Stack.Screen name="UserDetail" component={UserDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

// const SectionDescription = styled.Text`
//   margin-top: 8;
//   font-size: 18;
//   font-weight: 400;
//   color: ${Colors.dark};
// `;

// const SectionTitle = styled.Text`
//   font-size: 24;
//   font-weight: 600;
//   color: ${Colors.black};
// `;

// const SectionContainer = styled.View`
//   margin-top: 32;
//   padding-horizontal: 24;
// `;

// const Footer = styled.Text`
//   color: ${Colors.dark};
//   font-size: 12;
//   font-weight: bold;
//   padding: 4;
//   padding-right: 12;
//   text-align: right;
// `;

// const Highlight = styled.Text`
//   font-weight: bold;
// `;

// const Body = styled.View`
//   background-color: ${Colors.white};
// `;
