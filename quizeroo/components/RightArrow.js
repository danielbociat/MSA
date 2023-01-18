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
import rightArrow from '../Images/rightArrow.png';

const RightArrow = ({disabled, onPress}) => {
  return (
    <View>
      <TouchableOpacity disabled={disabled} style={[styles.create, disabled && styles.disabled]} onPress={onPress}>
        <Image source={rightArrow} style={styles.image}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  create: {
    alignItems: 'center',
    backgroundColor: '#e8cf34',
    padding: 16,
    alignSelf: 'flex-end',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
    marginTop: 30,
    marginRight: 15,
    marginBottom: 15,
    
  },
  disabled:{
    opacity: 0.5,
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default RightArrow;
