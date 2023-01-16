import {View, Text, ScrollView, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

const Quiz = ({
  navigation,
  route: {
    params: {title},
  },
}) => {
  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>back</Text>
      </Pressable>
      <ScrollView>
        <View>
          <Text style={styles.Title}>{title}</Text>
          <View>
            <Text style={styles.Text2}>Questions :</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Title: {
    fontSize: 50,
    alignSelf: 'center',
    padding: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  questions: {
    backgroundColor: '#E6D254',
    height: '90%',
  },
  Text2: {
    fontWeight: 'normal',
    fontSize: 22,
    padding: 8,
  },
});

export default Quiz;