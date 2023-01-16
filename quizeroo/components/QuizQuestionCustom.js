import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import Answer from './Answer';
import CustomInput from './CustomInput';
import Question from './Question';

const QuizQuestionCustom = ({}) => {
  return (
    <ScrollView>
      <View style={styles.contain}>
        <Question placeholder="Q:" placeholderTextColor={'black'}></Question>
        <Answer></Answer>
        <Answer></Answer>
        <Answer></Answer>
        <Answer></Answer>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contain: {
    backgroundColor: '#E6D254',
    width: '90%',
    borderRadius: 15,
    borderColor:'black',
    borderWidth:2,
    
    alignSelf: 'center',
  },
});

export default QuizQuestionCustom;
