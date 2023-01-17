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
import leftArrow1 from "../Images/leftArrow1.png";

const LeftArrow = ({onPress}) =>

  {
    return (
      <View>
        <TouchableOpacity style={styles.create} onPress={onPress}>
        <Image source={leftArrow1}
          style={styles.image}></Image> 
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
    height: 50,
    width:50,
    

  }
});


export default LeftArrow;
