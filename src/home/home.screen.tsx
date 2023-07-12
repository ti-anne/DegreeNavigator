import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    Pressable,
    Alert,
    View,
    StatusBar,
    Button,
    Image,
} from 'react-native';
import HomeButtons from '../../library/buttons/home-buttons';
import IconEntypo from 'react-native-vector-icons/Entypo'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TabNavigator from '../../library/bottom-tab/bottom-tabs';
import ProgressBar from '../../library/text/progress-bar';
import Icon from 'react-native-vector-icons/Entypo';


const Stack = createNativeStackNavigator();

function HomeScreen({navigation}:{navigation:any}) {
    const insets = useSafeAreaInsets();
    return (
      
      <SafeAreaView style={
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}>
          <StatusBar
        barStyle={'light-content'} />
        <ScrollView
        contentInsetAdjustmentBehavior='automatic' >
          <ProgressBar />
          <View style = {{flex: 1, padding: 10, justifyContent: 'center', alignContent: 'center', marginVertical: 15}}>
            

            <HomeButtons name = "My Degree Progress" onPressed={()=>{
              navigation.navigate('MyDegreeProgress')
            }} />
            <HomeButtons name = "Planner" onPressed = {() => {
                navigation.navigate('Planner')
            }} />
            <HomeButtons name = "Browse Other Degrees" onPressed = {() => {
                navigation.navigate('BrowseOtherDegrees')
            }} />
          </View>
        </ScrollView>
        
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  
    topInfo: {
      flex: 1,
      marginTop: 10,
      marginBottom: 10,
      paddingHorizontal: 24,
      paddingVertical: 10,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    container: {
        backgroundColor: '#002145', 
        height: 70, 
        maxWidth: 1000, 
        display: 'flex',
        justifyContent: 'center',
    },
    bottom: {
        flex: 1,
        width: 1000,
        height: 20,
        color: '#002145',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexWrap: 'wrap-reverse'
      },
});

export default HomeScreen;