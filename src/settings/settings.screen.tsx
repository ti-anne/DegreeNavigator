import AsyncStorage from '@react-native-async-storage/async-storage';
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
import ThemeSwitch from '../../library/buttons/theme-switch';


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
              onPress={() => navigation.navigate('CourseCatalog')
              }
              color = '#002145'
               />
            </View>
            <View style = {styles.container}>
              
               <View style={{padding:10, justifyContent:'space-between', flexDirection:'row'}}>
                <Text style={{color:'#002145', fontSize: 18.5, alignSelf: 'center'}}>
                  Dark Mode
                </Text>
                <ThemeSwitch />
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
              onPress={()=>navigation.navigate('Help')}
              color = '#002145'
               />
            </View>
            <View style = {styles.container}>
              <Button 
              title = "Help"
              onPress={()=>navigation.navigate('Help')}
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
    },
    outContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      flexDirection: 'column',
      backgroundColor: 'white',
      
      
    }
  });

export default SettingScreen;