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



const AddButton = ({onPress}) =>

  {
    return (
      <View>
        <TouchableOpacity style={styles.create} onPress={onPress}>
        <Image source={addB}
          style={styles.image}></Image> 
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  create: {
    alignItems: 'center',
    backgroundColor: '#E6D254',
    padding: 20,
    width: '80%',
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 40,
  },
  image:{
    height: 30,
    width:30,
    

  }
});
export default AddButton;
