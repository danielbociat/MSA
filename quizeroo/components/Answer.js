import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TextInput,
} from 'react-native';

const Answer = ({
    value,
    setValue,
    placeholder,
    placeholderTextColor,
    
  }) => {
    return (
      <View style={styles.container}>
        
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={styles.input}
         
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#001a23',
        width: '90%',
        alignSelf:'center',
    
        borderRadius: 10,
        height: 45,
        borderWidth: 1,
        borderColor: '#e8f1f2',
    
        //padding: 18,
        marginVertical: 10,
    },
    input: {
        color: 'black',
        height: 60,
        fontWeight:'bold',
        fontSize: 22,
        
        
      },

})
  export default Answer;