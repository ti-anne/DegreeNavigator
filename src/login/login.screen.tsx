import React, { useEffect, useState } from 'react';
import { View, StatusBar, StyleSheet, SafeAreaView, Image, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import LogInButton from '../../library/buttons/login-button';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import UserPwIn from '../../library/buttons/username-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

enum keys {
  user = 'userData',
  username = 'a',
  pw = '123'
}

type user = {
  username : string,
  pw : string,
  isLoggedIn : boolean,
}

function LogIn({navigation}:{navigation:any}) {
  const insets = useSafeAreaInsets();
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const isFocused = useIsFocused();

  const storeToken = async (user:user) => {
    if (usernameInput === keys.username && passwordInput === keys.pw) {
      try {
        user.isLoggedIn = true;
        console.log('\nstore user data ', user, '\n');
        await AsyncStorage.setItem(keys.user, JSON.stringify(user));
        
      } catch (error) {console.log(error)}
    } else {Alert.alert('Wrong username or password.\nTry again')}
  }

  const getToken = async () => {
    try {
      let value = await AsyncStorage.getItem(keys.user);
      if (value !== null) {
        let parsedUser = JSON.parse(value);
        console.log('parsed user data: ', parsedUser)
        if (parsedUser.isLoggedIn === true){
          console.log('\nlogged in\n');}
      }

    } catch (error) {console.log(error)}
  }

  if (isFocused) getToken();


  const loginUser = async () => {
    let userInput = {
      username:usernameInput,
      pw:passwordInput,
      isLoggedIn:false
    }
    storeToken(userInput);
    navigation.navigate('Home')
  }

  


  return (
    <SafeAreaView style={[
      styles.background,
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      },]}>
      <StatusBar barStyle="light-content"/>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: 100, height: 136 }}
          source={{
            uri: 'https://images.squarespace-cdn.com/content/v1/574f0dff1d07c0e367eabc03/1609864912784-KCXOW1O1K8X398PKV125/ubc-logo2.png',
          }} />
        <View style={styles.container}>
        <TextInput
      placeholder="Username"
      autoCapitalize='none'
      clearButtonMode='always'
      style={styles.inputSpace}
      onChangeText={setUsernameInput} />
      <TextInput
        placeholder="Password"
        autoCapitalize='none'
        clearButtonMode='always'
        style={styles.inputSpace}
        secureTextEntry={true}
        onChangeText={setPasswordInput} />
          <LogInButton onPressed={() => {
            loginUser();
            
          }} />

        </View>
      </View>



    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#002145',
    height: 1000,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'column',
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
  inputSpace: {
    height: 40,
    width: 230,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  }
});

export default LogIn;