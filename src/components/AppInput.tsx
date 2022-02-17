import React, { Component, useState } from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';

const AppInput = (props) =>
{
  const {
    ImageSource,
    placeholder,
    keyboardType,
    onChange,
    style
  } = props

  return <View style={[styles.inputBox, style]}>
    {/* <Image source={require('../../assets/'+ImageSource)} style={styles.InputIcon} /> */}
    <TextInput style={styles.InputText}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor='#677481'
      selectionColor='#fff'
      keyboardType={keyboardType}
      autoCorrect={false}
      {...props}
    />
  </View>
}

export default AppInput

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
    color: '#677481',
    fontSize: 15,
    backgroundColor: '#F0F4F8',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  InputIcon: {
    padding: 10,
    resizeMode: 'cover'
  },
  InputText: {
    padding: 10
  }
}
);