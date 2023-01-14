import * as React from 'react'
import { View, Text, StyleSheet ,SafeAreaView} from 'react-native'
import Login from './screens/LoginScreen';
import SignUp from './screens/SignUpScreen';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
}; 

const styles = StyleSheet.create({
  root:{
    flex:1,
  }
});

export default App;