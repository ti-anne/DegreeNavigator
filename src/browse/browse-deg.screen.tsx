import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  Alert,
  View,
  StatusBar,
  TextInput,
  FlatList
} from 'react-native';


const DATA = [
  {id: '1', title: 'B.Sc - Physics Major'},
  {id: '2', title: 'B.Sc - Math Major'},
  {id:'3', title: 'B.A - Psychology Major'},
  {id: '4', title: 'B.Sc - Biology Major'},
  {id: '5', title: 'B.Sc - Chemistry Major'},
  {id:'6', title: 'B.A - Media Studies Major'},
]

type ItemProps = {title: string};
const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function BrowseOtherDegrees() {
  const [text, onChangeText] = React.useState('');
    return (
      <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle= "light-content"/>
         
         <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
            <TextInput
              placeholder="Program, major, minor..."
              autoCapitalize='none'
              clearButtonMode='while-editing'
              style={styles.inputSpace}
              value={text}
              enablesReturnKeyAutomatically
              onChangeText={onChangeText} />
          </View>  }
        />
          
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    inputSpace: {
      height: 40,
      width: 230,
      padding: 10,
      marginBottom: 20,
      borderColor: '#002145',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: 'white'
    },
    container: {
      flex: 1,
      margin: 12,
      flexDirection: 'column',
      backgroundColor: '#002145',
      height: 1000,
      borderRadius: 10,
    },
    item: {
      backgroundColor: '#002145',
      borderRadius: 10,
      padding: 20,
      marginHorizontal: 20,
      marginVertical: 1,
    },
    title: {
      fontSize: 16,
      color: 'white',
      fontWeight: '600'
    },
  });

export default BrowseOtherDegrees;