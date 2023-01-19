import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import {set} from 'react-native-reanimated';
import Answer from './Answer';
import CustomInput from './CustomInput';
import Question from './Question';


const QuizQuestionCustom = ({quiz, setQuiz, step}) => {
  const [questionText, setQuestionText] = useState(quiz.questions[step].questionText);
  const [answer, setAnswer] = useState(quiz.questions[step].answer);
  const [a, setA] = useState(quiz.questions[step].a);
  const [b, setB] = useState(quiz.questions[step].b);
  const [c, setC] = useState(quiz.questions[step].c);

  const questionObj = useMemo(
    () => ({
      questionText,
      answer,
      a,
      b,
      c,
    }),
    [questionText, answer, a, b, c],
  );

  const handleQuestionChange = () => {
    const newQuizQuestionsArr = quiz.questions.map((questionText, idx) => {
      if (step === idx) {
        return questionObj;
      }
      return questionText;
    });

    setQuiz(prev => ({...prev, questions: newQuizQuestionsArr}));
  };

  useEffect(() => {
    handleQuestionChange();
  }, [questionObj]);

  const handleReset = () => {
    setQuestionText(quiz.questions[step].questionText);
    setAnswer(quiz.questions[step].answer);
    setA(quiz.questions[step].a);
    setB(quiz.questions[step].b);
    setC(quiz.questions[step].c);
  };

  useEffect(() => {
    handleReset();
  }, [step]);

  return (
      <View style={styles.contain}>
        <Question
          placeholder="Q:"
          placeholderTextColor={'black'}
          value={questionText}
          setValue={val => setQuestionText(val)}></Question>
        <Answer
          placeholder={'Correct Answer: '}
          value={answer}
          setValue={val => setAnswer(val)}
          placeholderTextColor={'white'}
        />
        <Answer placeholder={'Wrong Answer #1: '} placeholderTextColor={'white'} value={a} setValue={val => setA(val)} />
        <Answer placeholder={'Wrong Answer #2: '} placeholderTextColor={'white'} value={b} setValue={val => setB(val)} />
        <Answer placeholder={'Wrong Answer #3: '} placeholderTextColor={'white'} value={c} setValue={val => setC(val)} />
      </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    backgroundColor: '#e8cf34',
    width: '90%',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,

    alignSelf: 'center',
  },
  text: {
    color: 'white',
  },
});

export default QuizQuestionCustom;
