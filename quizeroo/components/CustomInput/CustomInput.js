import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TextInput,
} from 'react-native';

const CustomInput = ({
  value,
  setValue,
  placeholder,
  placeholderTextColor,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001a23',
    width: '100%',

    borderRadius: 10,
    height: 45,
    borderWidth: 1,
    borderColor: '#e8f1f2',

    paddingHorizontal: 12,
    marginVertical: 3,
  },
  input: {
    color: 'white',
    height: 45,
    fontWeight:'bold'
  },
});

export default CustomInput;
