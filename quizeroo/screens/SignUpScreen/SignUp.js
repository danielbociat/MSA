import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import background from '../../Images/Background.png';
import {apiUrl} from '../../storage/api';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailValidError, setEmailValidError] = useState('');

  const onRegisterPressed = async () => {
    if (username === '') {
      setErrorMessage('Username is mandatory!');
      return;
    }

    if (email === '') {
      setErrorMessage('Email is mandatory!');
      return;
    }

    if (password === '') {
      setErrorMessage('Password is mandatory!');
      return;
    }

    if (password !== passwordRepeat) {
      setErrorMessage('Passwords are not matching!');
      return;
    }

    setErrorMessage('');
    try {
      const response = await fetch(apiUrl + 'users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const responseJson = await response.json();

      if (!response.ok) {
        setErrorMessage(responseJson.errorMessage);
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {}
  };

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (reg.test(val) === false) {
      setEmailValidError('Please enter a valid e-mail address');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
  };

  const onLoginPressed = () => {
    navigation.navigate('Login');
  };

  const onTermsOfUse = () => {
    console.log('onTermsOfUse');
  };

  const onPrivacyPolicy = () => {
    console.log('onPrivacyPolicy');
  };

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={background}
        style={styles.image}
        resizeMode="stretch">
        <View style={styles.root}>
          <Text style={styles.title}>Create an account</Text>

          <CustomInput
            placeholder="Username"
            placeholderTextColor="#fff"
            value={username}
            setValue={setUsername}
          />

          <CustomInput
            placeholder="Email"
            placeholderTextColor="#fff"
            value={email}
            setValue={setEmail}
            onChangeText={value => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />

          <CustomInput
            placeholder="Password"
            placeholderTextColor="#fff"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />

          <CustomInput
            placeholder="Confirm Password"
            placeholderTextColor="#fff"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry
          />

          {errorMessage !== '' && <Text>{errorMessage}</Text>}
          {emailValidError ? <Text>{emailValidError}</Text> : null}

          <CustomButton text="Register" onPress={onRegisterPressed} />

          <Text style={styles.text}>
            By registering, you confirm that you accept our{' '}
            <Text style={styles.link} onPress={onTermsOfUse}>
              Terms of Use
            </Text>{' '}
            and{' '}
            <Text style={styles.link} onPress={onPrivacyPolicy}>
              Privacy Policy
            </Text>
            .
          </Text>

          <CustomButton
            text="Have an account? Sign in"
            onPress={onLoginPressed}
            type="TERTIARY"
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    margin: 40,
    backgroundColor: '#white',
    marginBottom: 0,
    height: '100%',
  },
  title: {
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    marginTop: 60,
    marginBottom: 40,
    alignContent: 'center',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#e8cf34',
    fontStyle: 'bold',
  },
  image: {
    alignContent: 'center',
  },
});
export default SignUp;
