import {View, Text, ScrollView, Pressable, StyleSheet,Image,TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import back from '../../Images/back.png';
import CustomTitle from '../../components/CustomTitle';
import QuizQuestionCustom from '../../components/QuizQuestionCustom';

const CreateQuiz = ({navigation}) => {
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
      <Image source={back}
          style={styles.image}></Image> 
      </Pressable>
      <Text style={styles.title}>Quizz name: </Text>
      <CustomTitle></CustomTitle>
      <Text style={styles.add}>Add your questions:</Text>
      <QuizQuestionCustom></QuizQuestionCustom>
      
    </View>
  );
};
const styles = StyleSheet.create({
  image:{
    marginTop: 15,
    marginLeft:10,
    height:30,
    width:30,
  },
  Custom:{
    marginTop: 40,
  },
  title:{
    fontSize : 20,
    padding: 30,
    fontWeight: 'bold',
    color :'black',
  },
  add:{
    fontSize : 16,
    padding: 30,
    fontWeight: 'bold',
    color :'black',
  }

})
export default CreateQuiz;
