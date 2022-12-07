import React , {useState} from 'react'
import {View, Text , StyleSheet ,useWindowDimensions, Image , ScrollView} from 'react-native'
import Logo from  '../../Images/Untitled_Artwork.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const Login =() => {
    const {height} = useWindowDimensions();
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const onLoginPressed = () => {
        console.warn("Sign in");
    };
    const onForgotPasswordPressed= () => {
        console.warn("onForgotPasswordPressed");

    };
    
    const onLoginWithFacebook = () => {
        console.warn("Facebook");
    };
    
    const onLoginWithGoogle = () => {
        console.warn("Google");
    };
    
    const onSignUpPressed = () => {
        console.warn("Google");
    }


    return(
        <ScrollView>
        <View style={styles.root}>
            <Image 
            source = {Logo} 
            style={[styles.logo  ,
            {height: height*0.4}]} 
            resizeMode="contain" />

            <CustomInput 
            placeholder= "Username" 
            value={username} 
            setValue={setUsername}/>

            <CustomInput 
            placeholder = "Password" 
            value={password} 
            setValue={setPassword}/>
            
            <CustomButton text="Sign In" onPress={onLoginPressed} />
            
            <CustomButton 
            text="Forgot password ?" 
            onPress={onForgotPasswordPressed}
            type = "TERTIARY" />
            
            <CustomButton 
            text="Sign in with Facebook" 
            onPress={onLoginWithFacebook} 
            bgColor="#E7EAF4"
            fgColor="#4765A9"/>
           
    
            <CustomButton 
            text="Sign in with Google" 
            onPress={onLoginWithGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
             />

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