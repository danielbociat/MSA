import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Login from './screens/LoginScreen';
import SignUp from './screens/SignUpScreen';
import MainPage from './screens/MainPageScreen/MainPage';
import {useNavigationContainerRef} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Category from './screens/MainPageScreen/Category';
import CreateCategory from './screens/MainPageScreen/CreateCategory';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
    //     <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
    //   </Stack.Navigator>
    //
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="CreateCategory"
          component={CreateCategory}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
