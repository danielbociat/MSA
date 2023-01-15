import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import Logo from '../../Images/Untitled_Artwork.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const apiUrl = "https://quizeroo.azurewebsites.net/api/"

const Login = ( {navigation} ) => {
    const {height} = useWindowDimensions();
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const onLoginPressed = async () => {
        try{
            const response = await fetch(apiUrl + 'auth', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({"username":username, "password": password}),
            })
            const responseJson = await response.json(); 
      
            if(!response.ok){
              console.warn("SCANDAL");
            }
            else{
              console.warn("Add navigation here!!!");
            }
            
          }catch(error){}
    };
    const onForgotPasswordPressed= () => {
        console.warn("onForgotPasswordPressed");

    };
    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    };

    return(
        <ScrollView>
            <View style={styles.root}>
                <Image 
                source = {Logo} 
                style={[styles.logo  ,
                {height: height*0.4}]} 
                resizeMode="contain" />

                <CustomInput 
                placeholder= "Username..." 
                value={username} 
                setValue={setUsername}/>

                <CustomInput 
                placeholder = "Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry/>
                
                <CustomButton text="Sign In" onPress={onLoginPressed} />
                
                <CustomButton 
                text="Forgot password ?" 
                onPress={onForgotPasswordPressed}
                type = "TERTIARY" />

                <CustomButton 
                text="Don't have an account? Create one" 
                onPress={onSignUpPressed}
                type = "TERTIARY" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding: 20,
        backgroundColor : '#white',
    },
    logo:{
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,
    }
})

export default Login;
