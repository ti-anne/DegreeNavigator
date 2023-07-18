import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Appearance,
  useColorScheme
} from 'react-native';
import {ColorDark, ColorLight} from '../../theme/colors';
import { ThemeProvider } from 'styled-components/native'
import ThemeSwitch from '../../library/buttons/theme-switch';

function SettingScreen({navigation}:{navigation:any}) {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const getTheme = async () => {
      let value = await AsyncStorage.getItem('theme')
      if (value == 'dark-mode') {
        setDarkMode(true);
        console.log('theme set to dark mode')
      } else {
        setDarkMode(false);
        console.log('theme set to light mode')
      }
    }
    getTheme();
  }, [darkMode])
  
    return (
      <SafeAreaView>
         <StatusBar
        barStyle={'light-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <View style={[styles.outContainer,
            {backgroundColor: darkMode? ColorDark.bg : ColorLight.bg}]}>
            
            <View style = {[styles.container, 
            {
              backgroundColor: darkMode? ColorDark.bg:ColorLight.bg,
              borderColor: darkMode? ColorDark.txt : ColorLight.accent,
              borderTopWidth: 1,
              }]}>
              <Button 
              title = "Course Catalog"
              onPress={() => navigation.navigate('CourseCatalog')
              }
              color = {darkMode? ColorDark.txt:ColorLight.txt}
               />
            </View>
            <View style = {[styles.container, 
            {
              backgroundColor: darkMode? ColorDark.bg:ColorLight.bg,
              borderColor: darkMode? ColorDark.txt : ColorLight.accent,
              }]}>
              
               <View style={{padding:10, justifyContent:'space-between', flexDirection:'row'}}>
                <Text style={{
                  color: darkMode ? ColorDark.txt : ColorLight.txt, 
                  fontSize: 18.5, alignSelf: 'center'}}>
                  Dark Mode
                </Text>
                <ThemeSwitch isToggled={(toggle) => setDarkMode(toggle)}/>
               </View>
            </View>
            <View style = {[styles.container, 
            {
              backgroundColor: darkMode? ColorDark.bg:ColorLight.bg,
              borderColor: darkMode? ColorDark.txt : ColorLight.accent,
              }]}>
              <Button 
              title = "Account"
              onPress={()=>navigation.navigate('AccountScreen')}
              color = {darkMode? ColorDark.txt:ColorLight.txt}
               />
               
            </View>
            <View style = {[styles.container, 
            {
              backgroundColor: darkMode? ColorDark.bg:ColorLight.bg,
              borderColor: darkMode? ColorDark.txt : ColorLight.accent,
              }]}>
              <Button 
              title = "Privacy"
              onPress={()=>navigation.navigate('Help')}
              color = {darkMode? ColorDark.txt:ColorLight.txt}
               />
            </View>
            <View style = {[styles.container, 
            {
              backgroundColor: darkMode? ColorDark.bg:ColorLight.bg,
              borderColor: darkMode? ColorDark.txt : ColorLight.accent,
              }]}>
              <Button 
              title = "Help"
              onPress={()=>navigation.navigate('Help')}
              color = {darkMode? ColorDark.txt:ColorLight.txt}
              
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
      borderBottomWidth: 1,
      padding: 10,
    },
    outContainer: {
      height: 600
    }
  });

export default SettingScreen;