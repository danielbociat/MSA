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
import addB from "../Images/addB.png"



const CreateQuizButton = ({disabled, onPress}) =>

  {
    return (
      <View>
        <TouchableOpacity disabled={disabled} style={[styles.create, disabled && styles.disabled]} onPress={onPress}>
        <Text source={addB}
          style={styles.image}>
            Submit    
        </Text> 
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
create: {
    alignItems: 'center',
    backgroundColor: '#E6D254',
    padding: 16,
    alignSelf: 'flex-start',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
    marginTop: 30,
    marginLeft:15,
    marginBottom:15,
    },
  image:{
    height: 30,
    width:30,
  },
  disabled:{
    opacity: 0.5,
  },
});
export default CreateQuizButton;
