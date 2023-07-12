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

function AccountScreen() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>
              <View style = {styles.block}>
                <Button 
                title = "Student Service Centre"
                onPress={()=>Linking.openURL('https://ssc.adm.ubc.ca/sscportal/servlets/SSCMain.jsp')}
                color = '#002145'
                />
              </View>
              <View style = {styles.block}>
                <Button 
                title = "Link to iCloud"
                onPress={()=>Linking.openURL('https://www.google.com/')}
                color = '#002145'
                />
              </View>
              
              <View style = {styles.block}>
                <Button 
                title = "Log Out"
                onPress={() => showConfirmDialog()}
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