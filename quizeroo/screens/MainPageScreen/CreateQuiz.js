import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import back from '../../Images/back.png';
import CustomTitle from '../../components/CustomTitle';
import QuizQuestionCustom from '../../components/QuizQuestionCustom';
import AddButton from '../../components/AddButton';
import LeftArrow from '../../components/LeftArrow';
import RightArrow from '../../components/RightArrow';
import {useState} from 'react';
import quizImage from '../../Images/quizImage.png';

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
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground source={quizImage} style={styles.background}>
        <View style={{flex: 1}}>
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
              <QuizQuestionCustom
                quiz={quiz}
                setQuiz={setQuiz}
                step={step - 1}
              />
            </>
          )}
        </View>
        <View>
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
      </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    marginTop: 25,
    marginLeft: 10,
    height: 30,
    width: 30,
  },
  Custom: {
    marginTop: 40,
  },
  title: {
    fontSize: 38,
    padding: 26,
    fontWeight: 'bold',
    color: 'black',
    alignText:'center',
    paddingLeft: 90,
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
  background: {
    height: '100%',
    resizeMode: 'cover',
  },
});
export default CreateQuiz;
