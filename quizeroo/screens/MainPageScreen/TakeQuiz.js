import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {apiUrl} from '../../storage/api';
import {useNavigation} from '@react-navigation/native';
import back from '../../Images/back.png';
import {getData, storeData} from '../../storage/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import quizImage from '../../Images/quizImage.png';
import RightArrow from '../../components/RightArrow';

const TakeQuiz = ({
  navigation,
  route: {
    params: {questions},
  },
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleQuestionAnswer = (answer_id, question_id) => {
    console.log(answer_id, question_id);
    return;
  };

  const goNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  console.log(questions);
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      contentContainerStyle={{flexGrow: 1}}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={back} style={styles.image}></Image>
      </Pressable>

      <View>
        <Text style={styles.Title}>{questions[currentQuestion].question}</Text>
        <ImageBackground source={quizImage} style={styles.background}>
          {questions[currentQuestion].answers.map((a, key) => (
            <Pressable
              key={key}
              onPress={handleQuestionAnswer(
                a.id,
                questions[currentQuestion].id,
              )}
              style={[styles.answer]}>
              <Text style={styles.answerText}>{a.text}</Text>
            </Pressable>
          ))}
          <RightArrow onPress={goNext} />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Title: {
    fontSize: 40,
    alignSelf: 'center',
    padding: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom:60,
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
    opacity: 0.35,
  },

  Text2: {
    fontWeight: 'normal',
    fontSize: 22,
    padding: 10,
  },
  image: {
    marginTop: 15,
    marginLeft: 10,
    height: 30,
    width: 30,
  },
  background: {
    height: '100%',
    resizeMode: 'cover',
  },
  answer: {
    padding: 10,
    borderRadius: 15,
    marginVertical: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    width: '90%',
    alignSelf: 'center',
  },
  answerText: {
    fontWeight:'bold',
    fontSize: 25,
    color:"black",

  },
  answerCorrect: {
    borderColor: 'green',
    backgroundColor: '#c0edaf',
    borderWidth: 5,
  },
  answerWrong: {
    borderColor: 'red',
    backgroundColor: '#edaaa6',
    opacity: 0.5,
  },
});

export default TakeQuiz;
