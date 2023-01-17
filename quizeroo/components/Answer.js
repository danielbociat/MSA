import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import {RotateInDownLeft} from 'react-native-reanimated';

const Answer = ({value, setValue, placeholder, placeholderTextColor, text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textA} >
        {text}
      </Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        //placeholderTextColor={placeholderTextColor}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#001a23',
    width: '90%',
    alignSelf: 'center',
    alignContent: 'space-around',
    borderRadius: 10,
    height: 45,
    borderWidth: 1,
    borderColor: '#e8f1f2',

    //padding: 18,
    marginVertical: 6,
  },
  input: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 16,
  },
  textA: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginVertical: 10,
    marginLeft: 8,
    fontWeight: 'bold',
    //flexGrow:'row',
    //textAlign: 'start',
  },
});
export default Answer;
