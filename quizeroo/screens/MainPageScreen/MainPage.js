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
import {useNavigation} from '@react-navigation/native';

const MainPage = ({navigation}) => {

  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
      fetch(apiUrl + 'Quiz', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
      })
      .then(response => {
        if(response.ok) return response.json();
        throw response;
      })
      .then(data => {setQuizes(quizesTst)})
      .catch(error => {
        console.warn(error);
      })
  });
   
  return (
    <>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.view}>
          {quizes.map(({name}, key) => (
            <Pressable
              key={key}
              style={styles.category}
              onPress={() => navigation.navigate('Quiz', {title: name})}>
              <Text style={styles.Text}>{name}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <View style={styles.createBttn}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateQuiz')}
          style={styles.create}>
          <Pressable>
            <Text style={styles.Text2}>Create a new quiz</Text>
          </Pressable>
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
    backgroundColor: '#E6D254',
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
    marginTop: 40,
    height:'90%',
    //   backgroundColor: "black",
    //   flex: 1,
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
    color: '#E6D254',
  },
  createBttn: {
    backgroundColor: '#E6D254',
    height: '15%',
    alignContent: 'center',
  },
});

export default MainPage;

const quizesTst = [
  {
    name: 'Quiz 1',
  },
  {
    name: 'Quiz 2',
  },
  {
    name: 'Quiz 3',
  },
  {
    name: 'Quiz 4',
  },
  {
    name: 'Quiz 5',
  },
  {
    name: 'Quiz 6',
  },
  {
    name: 'Quiz 7',
  },
  {
    name: 'Quiz 8',
  },
];
