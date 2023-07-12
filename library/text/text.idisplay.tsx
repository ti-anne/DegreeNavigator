import React from 'react';
import {
  Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';


type IDProps = {
    stuid: string;
  };
  
  const IDisplay = (props: IDProps) => {
    return (
      <View>
        <Text style = {styles.subtitle}>
          #{props.stuid}
        </Text>
      </View>
    );
    };

    const styles = StyleSheet.create({
        subtitle: {
          flex: 1,
          fontSize: 15,
          color: 'white',
          fontWeight: '300',
          fontStyle: 'italic',
        },
      });

export default IDisplay;