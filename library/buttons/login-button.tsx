import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';

type AuthenProps = {
  onPressed?:()=>void
};
  
  const LogInButton = (props:AuthenProps) => {
    // console.log('home button: ', navigation)
    return (
      <View style = {styles.container}>
        <Pressable
        onPress={props.onPressed}
        style= {({pressed}) => [
          {
            backgroundColor: pressed ? '#0D3593' : 'white',
          },
          styles.wrapperCustom,
        ]}>
          {({pressed}) => (
            <Text style={styles.buttonText}>Log in</Text>
          )}
  
        </Pressable>
      
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    buttonText: {
      fontSize: 16,
      alignItems: 'center',
      color: 'black',
      fontWeight: '400',
    },
    wrapperCustom: {
      margin: 15,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 30,
    },
  });

export default LogInButton;