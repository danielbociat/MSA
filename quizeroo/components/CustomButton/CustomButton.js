import React from 'react'
import {View, Text , StyleSheet ,useWindowDimensions, TextInput, Pressable, Dimensions} from 'react-native'

const CustomButton = ({onPress, text, type = "PRIMARY",bgColor, fgColor}) => {
    return (
        <Pressable 
        onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`], 
            bgColor ? {backgroundColor : bgColor} : {},
            ]}>

            <Text 
            style={[
                styles.text, 
                styles[`text_${type}`],
                fgColor ? {color : fgColor}: {},
            ]}>{text}</Text>
        </Pressable>
      
    );
};




const styles = StyleSheet.create({
    container : {
        
        borderRadius : 15,
        width : '100%',
        marginVertical : 15,
        padding :10,
        alignItems : 'center',
        
    },
    container_PRIMARY : {
        backgroundColor : '#E6D254',

    },
    container_TERTIARY:{
        marginVertical : 10,
        marginTop : 3,

    },
    text : {
       fontWeight : 'bold',
       color : 'black',
        
    },
    text_TERTIARY : {
        color : 'gray',
        fontWeight : 'light',
        marginVertical : 0,
        
    },
   
});
export default CustomButton;