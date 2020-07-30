import React, {PureComponent} from 'react';
import {View, Text, Button} from 'react-native';
import {BackgroundTitle, Title} from './LoginScreen';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {RNCamera} from 'react-native-camera';

interface Props {}

interface IUser {
  id: string;
  name: string;
  username: string;
  balance: string;
  email: string;
  createdAt: Date;
  factor_authentication: boolean;
  user_ref: string;
  status: boolean;
}

class UserDetailScreen extends PureComponent<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    fetch(
      `https://5f0c22f99d1e150016b37d39.mockapi.io/api/v1/users/${this.props.route.params.id}`,
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState(result);
      });
  }

  handleGoBack = () => {
    // console.log(this.props);
    const {navigation} = this.props;
    navigation.goBack();
  };

  handleTakePhoto() {
    console.log('Chupj anh ne`');
  }

  takePicture = async () => {
    // if (this.camera) {
    const options = {quality: 0.5, base64: true};
    const data = await (this.camera as any).takePictureAsync(options);
    console.log(data.uri);
    // }
  };

  render() {
    const userDetails = this.state;

    return userDetails ? (
      <View style={{flex: 1}}>
        <BackgroundTitle>
          <Title>UserListScreen</Title>
        </BackgroundTitle>
        <View style={{margin: 10}}>
          <Text style={{fontWeight: 'bold'}}>User details</Text>
          <Text>Id: {userDetails.id}</Text>
          <Text>
            Create At:{' '}
            {moment(userDetails.createdAt).format('DD/MM/YYYY - HH:mm:ss')}
          </Text>
          <Text>Name: {userDetails.name}</Text>
          <Text>Email: {userDetails.email}</Text>
          <Text>Username: {userDetails.username}</Text>
          <Text>Balance: {userDetails.balance}</Text>
          <Text>
            factor_authentication:{' '}
            {userDetails.factor_authentication ? 'true' : 'false'}
          </Text>
          <Text>user_ref: {userDetails.user_ref}</Text>
          <Text>status: {userDetails.status ? 'true' : 'false'}</Text>
          <View style={{margin: 10}}>
            <Button title="Go back" onPress={this.handleGoBack} />
          </View>
          <Text style={{textAlign: 'center'}}>OR</Text>
          <View style={{margin: 10}}>
            <Button title="Take a photo" onPress={this.takePicture} />
          </View>
        </View>

        <RNCamera
          style={{flex: 1, alignItems: 'center'}}
          ref={(ref) => {
            this.camera = ref;
          }}
        />
      </View>
    ) : (
      <View>
        <Text>Waiting . . .</Text>
      </View>
    );
  }
}

// Wrap and export
export default function (props) {
  const navigation = useNavigation();

  return <UserDetailScreen {...props} navigation={navigation} />;
}
