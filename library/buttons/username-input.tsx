import React, { useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

type UsernameProps = {
  done: (username:string, password:string) => void
}

const UserPwIn = (props:UsernameProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
      <>
      <TextInput
      placeholder="Username"
      autoCapitalize='none'
      clearButtonMode='while-editing'
      style={styles.inputSpace}
      onChangeText={setUsername} />
      <TextInput
        placeholder="Password"
        autoCapitalize='none'
        clearButtonMode='while-editing'
        style={styles.inputSpace}
        secureTextEntry={true}
        onChangeText={setPassword} />
      {props.done(username,password)}
      
      </>
    )
}

const styles = StyleSheet.create ({
    inputSpace: {
      height: 40,
      width: 230,
      padding: 10,
      marginBottom: 5,
      borderRadius: 10,
      backgroundColor: 'white'
    }
  });

export default UserPwIn;