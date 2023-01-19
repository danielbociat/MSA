import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';




const CreateQuizButton = ({disabled, onPress}) =>

  {
    return (
      <View>
        <TouchableOpacity disabled={disabled} style={[styles.create, disabled && styles.disabled]} onPress={onPress}>
        <Text style={styles.text}>
          
            Submit    
        </Text> 
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
create: {
    alignItems: 'center',
    backgroundColor: '#e8cf34',
    padding: 26,
    alignSelf:'center',
    
    
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 20,
    },
 
  disabled:{
    opacity: 0.5,
  },
  text:{
    fontSize: 22,
    fontWeight:'bold',
  }
});
export default CreateQuizButton;
