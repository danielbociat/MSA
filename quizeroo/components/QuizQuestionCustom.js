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
  const [question, setQuestion] = useState(quiz.questions[step].question);
  const [answer, setAnswer] = useState(quiz.questions[step].answer);
  const [a, setA] = useState(quiz.questions[step].a);
  const [b, setB] = useState(quiz.questions[step].b);
  const [c, setC] = useState(quiz.questions[step].c);

  const questionObj = useMemo(
    () => ({
      question,
      answer,
      a,
      b,
      c,
    }),
    [question, answer, a, b, c],
  );

  const handleQuestionChange = () => {
    const newQuizQuestionsArr = quiz.questions.map((question, idx) => {
      if (step === idx) {
        return questionObj;
      }
      return question;
    });

    setQuiz(prev => ({...prev, questions: newQuizQuestionsArr}));
  };

  useEffect(() => {
    handleQuestionChange();
  }, [questionObj]);

  const handleReset = () => {
    setQuestion(quiz.questions[step].question);
    setAnswer(quiz.questions[step].answer);
    setA(quiz.questions[step].a);
    setB(quiz.questions[step].b);
    setC(quiz.questions[step].c);
  };

  useEffect(() => {
    handleReset();
  }, [step]);

  return (
    <ScrollView>
      <View style={styles.contain}>
        <Question
          placeholder="Q:"
          placeholderTextColor={'black'}
          value={question}
          setValue={val => setQuestion(val)}></Question>
        <Answer
          text={'Answer: '}
          value={answer}
          setValue={val => setAnswer(val)}
        />
        <Answer text={'A: '} value={a} setValue={val => setA(val)} />
        <Answer text={'B: '} value={b} setValue={val => setB(val)} />
        <Answer text={'C: '} value={c} setValue={val => setC(val)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contain: {
    backgroundColor: '#E6D254',
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
