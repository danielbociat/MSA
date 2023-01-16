import {View, Text, ScrollView, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

const CreateQuiz = ({navigation}) => {
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>back</Text> 
      </Pressable>
    </View>
  );
};

export default CreateQuiz;
