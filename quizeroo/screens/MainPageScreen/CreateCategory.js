import {View, Text, ScrollView, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

const CreateCategory = ({navigation}) => {
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>back</Text>
      </Pressable>
      <ScrollView></ScrollView>
    </View>
  );
};

export default CreateCategory;
