import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MainPage = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.view}>
        {categories.map(({name}, key) => (
          <Pressable
            key={key}
            style={styles.category}
            onPress={() => navigation.navigate('Category', {title: name})}>
            <Text style={styles.Text}>{name}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.cont}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateCategory')}
          style={styles.create}>
          <Pressable>
            <Text style={styles.Text2}>Create a new quizz</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    marginTop: 60,
    height:'80%',
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
  cont: {
    backgroundColor: '#E6D254',
    height: '20%',
    borderRadiusTop: 15,
    
    alignContent: 'center',

  },
});

export default MainPage;

const categories = [
  {
    name: 'Quizz 1',
  },

  {
    name: 'Quizz 2',
  },

  {
    name: 'Quizz 3',
  },
];
