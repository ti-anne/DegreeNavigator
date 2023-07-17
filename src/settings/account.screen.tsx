import React, { useState } from 'react';
import {
  Alert,
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import showConfirmDialog from '../../library/buttons/confirm-box';
import AsyncStorage from '@react-native-async-storage/async-storage';

enum keys {user = 'userData'}
function AccountScreen({navigation}:{navigation:any}) {

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem(keys.user);
      navigation.navigate('LogIn');
      let value = await AsyncStorage.getItem(keys.user)
      if (JSON.parse(value) == null) {
        console.log('token removed');
      }

    } catch (error) {console.log(error)}
  }

    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>
              <View style = {styles.block}>
                <Button 
                title = "Student Service Centre"
                onPress={()=>navigation.navigate('StudentService')}
                color = '#002145'
                />
              </View>
              <View style = {styles.block}>
                <Button 
                title = "Link to iCloud"
                onPress={()=>navigation.navigate('LinkCloud')}
                color = '#002145'
                />
              </View>
              
              <View style = {styles.block}>
                <Button 
                title = "Log Out"
                onPress={() => {
                  Alert.alert(
                    "Log out",
                    "Are you sure you want to log out?",
                    [
                      {
                        text: "Yes",
                        onPress: () => {
                          logOut(); 
                          console.log('\nlogged out')}
                      },
                      {
                        text: "No",
                      },
                    ]
                  )
                }}
                color = '#002145'
                />
              </View>
            </View>
            
        </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    block: {
      flex: 1,
      flexWrap: 'wrap',
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderColor: '#002145',
      padding: 10,
    },
    container: {
      
      flexDirection: 'column',
      backgroundColor: 'white',

    }
  });

export default AccountScreen;