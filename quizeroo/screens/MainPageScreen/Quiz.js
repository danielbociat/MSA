import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';
import {apiUrl} from '../../storage/api';
import {useNavigation} from '@react-navigation/native';
import back from '../../Images/back.png';
import {getData, storeData} from '../../storage/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import quizImage from '../../Images/quizImage.png';

const Quiz = ({
  navigation,
  route: {
    params: {title, id},
  },
}) => {
  const [currentQuiz, setCurrentQuiz] = useState();
  const [questions, setQuestions] = useState();

  const [token, setToken] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('token').then(tk => setToken(tk));
    fetch(apiUrl + 'Quiz/' + id, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) return response.json();
        throw response;
      })
      .then(data => {
        setCurrentQuiz(data);
        setQuestions(data.quiz_questions);
      })
      .catch(error => {});
  });

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
       <ImageBackground
          source={quizImage}
          style={styles.background}
         >
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={back} style={styles.image}></Image>
      </Pressable>
      <View style>
        <Text style={styles.Title}>{title}</Text>
        <Pressable
          disabled={questions ? false : true}
          style={questions ? styles.startbtn : styles.startbtn_disabled}
          onPress={() =>
            navigation.navigate('TakeQuiz', {questions: questions})
          }>
          <Text style={styles.Text2}>START QUIZ</Text>
        </Pressable>
      </View>
      </ImageBackground>
    </ScrollView>
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
    backgroundColor: '#E6D254',
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 15,
    marginTop: 40,
  },
  startbtn_disabled: {
    alignItems: 'center',
    backgroundColor: '#E6D254',
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
    marginTop: 40,
    opacity: 0.95,
  },

  Text2: {
    fontSize: 30,
    alignSelf: 'center',
    padding: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    marginTop: 15,
    marginLeft: 10,
    height: 30,
    width: 30,
  },
  view: {
    backgroundColor: 'white',
  },
  background: {
 
    height:'100%',
    resizeMode: 'cover',
  },
});

export default Quiz;
