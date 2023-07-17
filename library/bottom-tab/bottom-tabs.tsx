import React from 'react';
import {
    StyleSheet,
  } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconIonicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../../src/home/home.screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from '../../src/settings/settings.screen';
import MyDegreeProgress from '../../src/my-degree-prog/my-deg-prog.screen';
import Planner from '../../src/planner/planner.screen';
import BrowseOtherDegrees from '../../src/browse/browse-deg.screen';
import AddCourseButton from '../buttons/add-course-button';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../../src/login/login.screen';
import AccountScreen from '../../src/settings/account.screen';
import AddCourses from '../../src/planner/add-courses.screen';
import IDisplay from '../text/text.idisplay';
import CourseCatalog from '../../src/settings/course-catalog';
import Help from '../../src/settings/help.screen';
import StudentService from '../../src/settings/ssc.screen';
import LinkCloud from '../../src/settings/link-cloud.screen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {

  const HomeStack = () => {
    return (
      <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} options={{
          title:"Welcome, An!", 
         headerStyle:{backgroundColor: '#002145'}, 
         headerTintColor: '#fff',
         headerRight: () => {
          return <IDisplay stuid="79499364" />;
         }
         }} />
         <Stack.Screen name="MyDegreeProgress" component={MyDegreeProgress} 
         options={{
          title:"My Degree Progress", 
          headerStyle: {backgroundColor: '#002145'}, 
          headerTintColor: '#fff',
          headerBackTitle: "Back"}} />
         <Stack.Screen name= "Planner" component={Planner} 
            options = {{
              headerBackTitle: "Back",
              headerRight: () => (
              <AddCourseButton />
          ), headerStyle: {backgroundColor: '#002145'}, headerTintColor: '#fff',
          }} />
          <Stack.Screen name="AddCourses" component={AddCourses} options={{title:"Add Courses", headerStyle: {backgroundColor: '#002145'}, headerTintColor: '#fff',}} />
         <Stack.Screen name="BrowseOtherDegrees" component={BrowseOtherDegrees} 
         options={{
          title:"Browse Other Degrees", 
          headerStyle: {backgroundColor: '#002145'}, 
          headerTintColor: '#fff',
          headerBackTitle: "Back"}} />
         
      </Stack.Navigator>
    )}

  const SettingsStack = () => {
    return (
      <Stack.Navigator  >
         <Stack.Screen name= "SettingScreen" component={SettingScreen} options={{title:"Settings", headerStyle: {backgroundColor: '#002145'}, headerTintColor: '#fff',}} />
         <Stack.Screen name= "AccountScreen" component={AccountScreen}
          options={{ title: 'Account', headerStyle: {backgroundColor: '#002145'}, headerTintColor: '#fff',}} />
          <Stack.Screen name= "CourseCatalog" component={CourseCatalog} 
          options={{ title: 'Course Catalog', headerStyle: {backgroundColor: '#002145'}, headerTintColor: '#fff',}} />
          <Stack.Screen name= "Help" component={Help} 
          options={{ title: 'Help', headerStyle: {backgroundColor: '#002145'}, headerTintColor: '#fff',}} />
          <Stack.Screen name= "StudentService" component={StudentService} 
          options={{ title: 'Student Service Center', headerStyle: {backgroundColor: '#002145'}, headerTintColor: '#fff',}} />
          <Stack.Screen name= "LinkCloud" component={LinkCloud} 
          options={{ title: 'Link to ICloud', headerStyle: {backgroundColor: '#002145'}, headerTintColor: '#fff',}} />
      </Stack.Navigator>
    )}


  return (
    <>
    <Tab.Navigator
      
      backBehavior='initialRoute'
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#ddd',
        tabBarLabelStyle: {fontWeight: '500', 
        fontSize: 14, marginTop: -5, marginBottom: 5,
      color: 'white'},
        
        tabBarStyle: styles.container,
        
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel:'Home',
          tabBarIcon: () => <IconEntypo name="home" size = {30} color='white' />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => <IconIonicons name="ios-settings-sharp" size = {30} color='white' />
        }}
      />
    
    </Tab.Navigator>
    </>
  )
}




const styles = StyleSheet.create({
    container: {
      backgroundColor: '#002145',
      height: 70,
    }
  });

export default TabNavigator;