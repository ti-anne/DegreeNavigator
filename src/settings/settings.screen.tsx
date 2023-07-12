import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  View,
  Button,
  StatusBar,
  Linking,
  Switch,
} from 'react-native';

import { WebView } from 'react-native-webview';

enum url {
  course = 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-all-departments'
}

const CourseCatalog = () => {
  
  {console.log('pressed')}
  return(
    <View style={{flex:1, alignItems: 'flex-end', width: '90%', height: '90%'}}>
      <WebView
      source = {{uri: url.course}}
      startInLoadingState={true}
      style = {{flex: 1}} />
    </View>
      
  )
  }

function SettingScreen({navigation}:{navigation:any}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <SafeAreaView>
         <StatusBar
        barStyle={'light-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <View style={styles.outContainer}>

            <View style = {styles.container}>
              <Button 
              title = "Course Catalog"
              onPress={() => {
                <View style={{flex:1, alignItems: 'flex-end'}}>
                <WebView
                source = {{uri: url.course}}
                style = {{flex: 1}} />
                </View>
              }}
              color = '#002145'
               />
            </View>
            <View style = {styles.container}>
              <Button 
              title = "Customization"
              onPress={()=>Alert.alert('Pressed')}
              color = '#002145'
               />
               <View style={{padding:10, justifyContent:'space-between', flexDirection:'row'}}>
                <Text style={{color:'#002145', fontSize: 16}}>
                  Dark Mode
                </Text>
                <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#fff' : '#fff'}
                ios_backgroundColor="#002145"
                onValueChange={toggleSwitch}
                value={isEnabled}
      />
               </View>
            </View>
            <View style = {styles.container}>
              <Button 
              title = "Account"
              onPress={()=>navigation.navigate('AccountScreen')}
              color = '#002145'
               />
               
            </View>
            <View style = {styles.container}>
              <Button 
              title = "Privacy"
              onPress={()=>Alert.alert('Pressed')}
              color = '#002145'
               />
            </View>
            <View style = {styles.container}>
              <Button 
              title = "Help"
              onPress={()=>Alert.alert('Pressed')}
              color = '#002145'
              
               />
            </View>
            
            </View>
            
        </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexWrap: 'wrap',
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderColor: '#002145',
      padding: 10,
      flex: 0.2,
    },
    outContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      flexDirection: 'column',
      backgroundColor: 'white',
      
      
    }
  });

export default SettingScreen;