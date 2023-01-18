import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Logo from '../../Images/Untitled_Artwork.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import background from '../../Images/Background.png';
import {getData, storeData} from '../../storage/storage';
import {apiUrl} from '../../storage/api';

const Login = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPressed = async () => {
      fetch(apiUrl + 'auth', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: username, password: password}),
      })
      .then(response => {
        if(response.ok) return response.json();
        throw response;
      })
      .then(data => {
        storeData('token', data.token);
        navigation.navigate('MainPage');
      })
      .catch(error => {
        console.log(error);
      })
  };

  const onForgotPasswordPressed = () => {
    console.log('onForgotPasswordPressed');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.bgImageWrapper}>
        <ImageBackground
          source={background}
          style={styles.image}></ImageBackground>
      </View>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.4}]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Username..."
          value={username}
          setValue={setUsername}
          placeholderTextColor={'white'}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
          placeholderTextColor={'white'}
        />

        <CustomButton text="Sign In" onPress={onLoginPressed} />

        <CustomButton
          text="Forgot password ?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#white',
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 200,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  bgImageWrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
},
});

export default Login;
