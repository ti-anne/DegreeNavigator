import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

type GreetingProps = {
    name: string;
  };
  
const Greeting = (props: GreetingProps) => {
    return (
      <View>
        <Text style={styles.title}>Hello {props.name}!</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    title: {
        flex: 2,
        fontSize: 24,
        color: 'white',
        fontWeight: '600',
    }
});

export default Greeting;