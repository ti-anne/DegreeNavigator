import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DegReq = ({text,title}:{text:string, title:string}) => {
    return (
        <View style={styles.infoContainer}>
              <Text style={styles.info}>
                {title}
              </Text>
              <Text style={styles.text}>
              {text}
              </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
      flex: 1,
      marginHorizontal: 10,
      marginTop: 10,
      borderRadius: 20,
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#D9D9D9',
      padding: 10,
    },
    info: {
      fontSize: 16,
      fontWeight: '500',
    },
    text: {
      fontSize: 15, 
      padding: 5,
      textAlign: 'left'
    }
});

export default DegReq;