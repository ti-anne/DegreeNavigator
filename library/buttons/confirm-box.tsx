import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert } from 'react-native';

enum keys {user = 'userData'}

export type RootStackParamList = {
  LogIn: undefined;
}

const Stack = createNativeStackNavigator();
const showConfirmDialog = () => {

  const navigation = useNavigation();
  
  
    const logOut = async () => {
        try {
          await AsyncStorage.removeItem(keys.user);
          let value = await AsyncStorage.getItem(keys.user)
          if (JSON.parse(value) == null) {
            console.log('token removed');}

        } catch (error) {console.log(error)}
      }

    return (
        Alert.alert(
      "Log out",
      "Are you sure you want to log out?",
      [
        {
          text: "Yes",
          onPress: () => {
            logOut(); 
            console.log('\nlogged out')}
        },
        {
          text: "No",
        },
      ]
    ))
    }

export default showConfirmDialog;