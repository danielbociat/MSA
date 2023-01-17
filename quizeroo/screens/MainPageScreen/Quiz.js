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
      <ScrollView>
        <View>
          <Text style={styles.Title}>{title}</Text>
          <Text style={styles.Text2}>Questions :</Text>
      </View>
      </ScrollView>
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
    backgroundColor: '#E6D254',
    height: '90%',
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
