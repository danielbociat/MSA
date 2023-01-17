import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import back from '../../Images/back.png';
import CustomTitle from '../../components/CustomTitle';
import QuizQuestionCustom from '../../components/QuizQuestionCustom';
import AddButton from '../../components/AddButton';
import LeftArrow from '../../components/LeftArrow';
import RightArrow from '../../components/RightArrow';
import {useState} from 'react';

const CreateQuiz = ({navigation}) => {
  const [step, setStep] = useState(0);
  const [quiz, setQuiz] = useState({
    name: '',
    questions: [],
  });

  const generateNewQuestion = () => {
    setQuiz(prev => ({
      ...prev,
      questions: [...prev.questions, {answer: '', a: '', b: '', c: ''}],
    }));
  };

  const handleNextStep = () => {
    generateNewQuestion();
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => setStep(prev => prev - 1);

  console.log(quiz);

  return (
    <View style={styles.view}>
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={back} style={styles.image}></Image>
        </Pressable>
        {step === 0 && (
          <>
            <Text style={styles.title}>Quizz name: </Text>
            <CustomTitle
              value={quiz.name}
              setValue={val => setQuiz(prev => ({...prev, name: val}))}
            />
          </>
        )}

        {step !== 0 && (
          <>
            <Text style={styles.add}>Add your questions:</Text>
            <QuizQuestionCustom quiz={quiz} setQuiz={setQuiz} step={step - 1} />
          </>
        )}
      </View>
      <View style={styles.view2}>
        <AddButton onPress={() => handleNextStep()} />
        {step !== 0 && (
          <>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              {step !== 0 ? (
                <LeftArrow onPress={() => handlePrevStep()} />
              ) : (
                <View />
              )}
              <RightArrow onPress={() => handleNextStep()} />
            </View>
          </>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    marginTop: 15,
    marginLeft: 10,
    height: 30,
    width: 30,
  },
  Custom: {
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    padding: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  add: {
    fontSize: 16,
    padding: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  view: {
    backgroundColor: 'white',
    resizeMode: 'contain',
    flex: 1,
    justifyContent: 'space-between',
  },
});
export default CreateQuiz;
