import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';

enum Majors {
  csM = "Computer Science Major",
  vsm = "Visual Art Minor"
}

type MajorProps = {
  onSelected: (name: any) => void;
}

  const MajorButton = (props:MajorProps) => {
    const [pressed, setPressed] = React.useState(Majors.csM);
    // const [sections, setSections] = React.useState<any>({CS});
    
    React.useEffect(() => {
      
      //console.log(sections, 'has changed');
      if (pressed === Majors.vsm) props.onSelected(Majors.vsm)
      else props.onSelected(Majors.csM)
      //console.log(sections);
    }, [pressed])
    return (

      <View style = {styles.container}>
        <Pressable
        onPress = {() => setPressed(Majors.csM)}
        style= {[
          {
            backgroundColor: pressed === Majors.vsm ? '#002145' : '#0D3593',
          },
          styles.wrapperCustom,
        ]}>
            <Text style={styles.buttonText}>{Majors.csM}</Text>
          
  
        </Pressable>
        <Pressable
        onPress = {() => setPressed(Majors.vsm)}
        style= {[
            {
              backgroundColor: pressed === Majors.csM ? '#002145' : '#0D3593',
            },
          styles.wrapperCustom,
        ]}>
          <Text style={styles.buttonText}>{Majors.vsm}</Text>
          
  
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
      fontSize: 13,
      alignItems: 'center',
      color: 'white',
      fontWeight: '400',
    },
    wrapperCustom: {
      display: 'flex',
      width: 170,
      margin: 15,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    pressedColor: {
        backgroundColor: '#0D3593',
    },
  });

export default MajorButton;
