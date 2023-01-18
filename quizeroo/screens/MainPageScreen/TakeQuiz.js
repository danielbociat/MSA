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
import AsyncStorage from '@react-native-async-storage/async-storage';
import quizImage from '../../Images/quizImage.png';

const TakeQuiz = ({
  navigation,
  route: {
    params: {questions},
  },
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground source={quizImage} style={styles.background}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={back} style={styles.image}></Image>
        </Pressable>
        <View>
          <Text style={styles.Title}>
            {questions[currentQuestion].question}
          </Text>
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
    backgroundColor: '#E6D254',
    height: '90%',
  },
  startbtn: {
    alignItems: 'center',
    backgroundColor: 'yellow',
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
    backgroundColor: 'yellow',
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
    // textDecorationLine: "underline",
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
});

export default TakeQuiz;
