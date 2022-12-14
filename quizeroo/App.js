import * as React from 'react'
import { View, Text, StyleSheet ,SafeAreaView} from 'react-native'
import Login from './screens/LoginScreen';
import SignUp from './screens/SignUpScreen';


const App = () =>{
  return(
      <SafeAreaView style = {styles.root}>
        <SignUp/>
        </SafeAreaView>
  );
} ;

const styles = StyleSheet.create({
  root:{
    flex:1,
    
   
  }
});

export default App;