import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TextInput,
} from 'react-native';

const Question = ({
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
      backgroundColor: 'white',
      width: '80%',
      alignSelf:'center',
      height:60,
      textAlign:'center',
  
      borderRadius: 15,
      
      borderWidth: 2,
      borderColor: 'black',
  
      
      //marginVertical: 3,
      marginBottom: 8,
      marginTop:12,
    },
    input: {
        color: 'black',
        height: 60,
        fontWeight:'bold',
        fontSize: 22,
        
        alignContent:'flex-start'
      },

})
  export default Question;