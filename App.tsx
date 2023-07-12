
import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {GestureHandlerRootView} from 'react-native-gesture-handler';
import TabNavigator from './library/bottom-tab/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginStack from './src/login/login-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState<boolean>();

  const getUserToken = async () => {
    try {
      const value = await AsyncStorage.getItem('userData');
      if (value !== null) { 
        console.log('parsed data, ', value)
        setIsSignedIn(true)
        console.log('logged in, no login screen')
      } else {setIsSignedIn(false); console.log('was logged out so:', isSignedIn)}
      
    } catch (err) {console.log(err)}
  }

    useEffect(() => {
      console.log('useEffect ran')
      getUserToken();
    },[])
    
    console.log('isSignedIn is', isSignedIn)
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          
          {isSignedIn? (<TabNavigator />) : (<LoginStack />)}
          
      </NavigationContainer>
    </GestureHandlerRootView>
    
  );
}
