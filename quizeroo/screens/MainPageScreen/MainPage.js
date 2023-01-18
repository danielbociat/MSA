import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {apiUrl} from '../../storage/api';
import { GetToken } from "../../services/AuthStatus";
import {useNavigation} from '@react-navigation/native';
import {getData, storeData} from '../../storage/storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

const MainPage = ({navigation}) => {

  const [quizes, setQuizes] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    AsyncStorage.getItem('token').then(tk => setToken(tk));
    fetch(apiUrl + 'Quiz', {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'},
    })
    .then(response => {
      if(response.ok) return response.json();
      throw response;
    })
    .then(data => {
      setQuizes(data);
    })
    .catch(error => {})
  });
   
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor:'white'}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.view}>
          {quizes.map(({title, id}, key) => (
            <Pressable
              key={key}
              style={styles.category}
              onPress={() => navigation.navigate('Quiz', {title: title, id: id})}>
              <Text style={styles.Text}>{title}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <View style={styles.createBttn}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateQuiz')}
          style={styles.create}>
            <Text style={styles.Text2}>Create a new quiz</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  category: {
    padding: 10,
    borderRadius: 15,
    marginVertical: 15,
    alignItems: 'center',
    backgroundColor: '#e8cf34',
    borderColor: 'black',
    borderWidth: 3,
    width: '80%',
   
    alignSelf: 'center',
  },
  Text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  view: {
    marginTop: 70,
    height:'100%',
    backgroundColor:'white',
  },
  create: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 15,
    marginTop: 20,
  },
  Text2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  createBttn: {
    backgroundColor: '#e8cf34',
    height: '15%',
    alignContent: 'center',
  },
});

export default MainPage;