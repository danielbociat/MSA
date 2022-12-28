import React , {useState} from 'react'
import {View, Text , StyleSheet  , ScrollView, ImageBackground} from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import background from  '../../Images/Background.png'
const SignUp =() => {
    
    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [passwordRepeat , setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
        console.warn(username, email, password);

        fetch("https://localhost:7128/api/" + 'users', {
            method: 'POST',
            body: JSON.stringify({username, email, password})
        }).then(() => { })
        .catch((e) => console.log(e));

    };
    
   
    const onLoginPressed = () => {
        console.warn("onLoginPressed");
    };

    const onTermsOfUse = () => {
        console.warn("onTermsOfUse");
    };

    const onPrivacyPolicy = () => {
        console.warn("onPrivacyPolicy");
    };



    return(
    
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground source={background} 
            style={styles.image} 
            resizeMode="stretch">
        <View style={styles.root}>
        
            <Text style = {styles.title}>Create an account</Text>

            <CustomInput 
            placeholder= "Username" 
            value={username} 
            setValue={setUsername}/>

            <CustomInput 
            placeholder= "Email" 
            value={email} 
            setValue={setEmail}/>

            <CustomInput 
            placeholder = "Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry/>

            <CustomInput 
            placeholder = "Confirm Password" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat}
            secureTextEntry/>
            
            <CustomButton text="Register" onPress={onRegisterPressed} />
            
           <Text style={styles.text}>
            By registering, you confirm that you accept our{' '} 
            <Text style={styles.link} onPress={onTermsOfUse}>Terms of Use</Text> and{' '} 
            <Text style={styles.link} onPress={onPrivacyPolicy}>Privacy Policy</Text>.</Text>
            
        

            <CustomButton
            text="Have an account? Sign in"
            onPress={onLoginPressed}
            type = "TERTIARY" />
            
            
       
        </View>
         </ImageBackground>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding: 20,
        margin: 40,
        backgroundColor : '#white',
        marginBottom: 0,
        height: '100%'
    },
    title: {
        alignItems : 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color : 'black',
        margin: 10,
        marginTop : 60,
        marginBottom : 40,
        alignContent: 'center'

    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color:'#E6D254',
        fontStyle : 'bold'
    },
    image:{
        alignContent : 'center',
       
    }
   
})
export default SignUp;