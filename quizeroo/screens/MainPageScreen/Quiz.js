import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import {apiUrl} from '../../storage/api';
import {useNavigation} from '@react-navigation/native';
import back from '../../Images/back.png';
import {getData, storeData} from '../../storage/storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Quiz = ({
  navigation,
  route: {
    params: {title, id},
  },
}) => {
  const [currentQuiz, setCurrentQuiz] = useState();
  const [questions, setQuestions] = useState();

  const [token, setToken] = useState("");

  useEffect(() => {
      AsyncStorage.getItem('token').then(tk => setToken(tk));
      fetch(apiUrl + 'Quiz/' + id, {
          method: 'GET',
          headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'},
      })
      .then(response => {
        if(response.ok) return response.json();
        throw response;
      })
      .then(data => {
        setCurrentQuiz(data);
        setQuestions(data.quiz_questions);
      })
      .catch(error => {});
    }
  );

  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={back} style={styles.image}></Image>
      </Pressable>
        <View>
          <Text style={styles.Title}>{title}</Text>
          <Pressable
              disabled = {questions ? false : true}
              style={questions ? styles.startbtn : styles.startbtn_disabled}
              onPress={() => navigation.navigate('TakeQuiz', {questions: questions})}>
              <Text style={styles.Text}>START QUIZ</Text>
          </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Title: {
    fontSize: 50,
    alignSelf: 'center',
    padding: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  questions: {
    backgroundColor: '#e8cf34',
    height: '90%',
  },
  startbtn: {
    alignItems: 'center',
    backgroundColor: '#e8cf34',
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 15,
    marginTop: 20,
  },
  startbtn_disabled: {
    alignItems: 'center',
    backgroundColor: '#e8cf34',
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 15,
    marginTop: 20,
    opacity: 0.35
  },

  Text2: {
    fontWeight: 'normal',
    fontSize: 22,
    padding: 10,
    // textDecorationLine: "underline",
  },
  image: {
    marginTop: 15,
    marginLeft: 10,
    height: 30,
    width: 30,
  },
});

export default Quiz;
