import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';

type TitleProps = {
  name: string;
  onPressed?:()=>void
};
  
  const HomeButtons = (props:TitleProps) => {
    // console.log('home button: ', navigation)
    return (
      <View style = {styles.container}>
        <Pressable
        onPress={props.onPressed}
        style= {({pressed}) => [
          {
            backgroundColor: pressed ? '#0D3593' : '#002145',
          },
          styles.wrapperCustom,
        ]}>
          {({pressed}) => (
            <Text style={styles.buttonText}>{props.name}</Text>
          )}
  
        </Pressable>
      
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    buttonText: {
      fontSize: 24,
      alignItems: 'center',
      color: 'white',
      fontWeight: '400',
    },
    wrapperCustom: {
      display: 'flex',
      margin: 15,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      width: 250,
      height: 100,
    },
  });

export default HomeButtons;