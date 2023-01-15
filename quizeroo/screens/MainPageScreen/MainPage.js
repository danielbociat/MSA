import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Pressable,
  TouchableOpacity
} from 'react-native';


const MainPage = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View //style={`padding-8 margin-10 `}
      >
        {categories.map(({name}, key) => (
          <Pressable
            key={key}
            //style={s`border-2 rounded-xl w-full py-3 px-6 my-4 bg-indigo-600 border-indigo-600 `}
            onPress={() => navigation.navigate('Category', {title: name})}>
            <Text //</Pressable>style={s`text-white font-medium text-lg`}
            >{name}</Text>
          </Pressable>
        ))}

        <TouchableOpacity
          //style={s`w-full flex flex-row justify-center border-2 rounded-xl py-3 bg-indigo-800  border-indigo-800  px-6 mt-4 `}
          onPress={() =>
            navigation.navigate('CreateCategory')
          }></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MainPage;

const categories = [
    
    {
      name: "Jk",
    },
    {
      name: "Med Stuff",
    },
    {
      name: "Spanish",
    },
  ];
