
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {

} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconEntypo from 'react-native-vector-icons/Entypo'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TabNavigator from './library/bottom-tab/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogIn from './src/login/login.screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddCourseButton from './library/buttons/add-course-button';
import IDisplay from './library/text/text.idisplay';
import BrowseOtherDegrees from './src/browse/browse-deg.screen';
import HomeScreen from './src/home/home.screen';
import MyDegreeProgress from './src/my-degree-prog/my-deg-prog.screen';
import AddCourses from './src/planner/add-courses.screen';
import Planner from './src/planner/planner.screen';
import AccountScreen from './src/settings/account.screen';
import CourseCatalog from './src/settings/course-catalog';
import Help from './src/settings/help.screen';
import LinkCloud from './src/settings/link-cloud.screen';
import SettingScreen from './src/settings/settings.screen';
import StudentService from './src/settings/ssc.screen';
import SplashScreen from './src/login/splash.screen';
import { ColorDark, ColorLight } from './theme/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        title: "Welcome, An!",
        headerStyle: { backgroundColor: '#002145' },
        headerTintColor: '#fff',
        headerRight: () => {
          return <IDisplay stuid="79499364" />;
        }
      }} />
      <Stack.Screen name="MyDegreeProgress" component={MyDegreeProgress}
        options={{
          title: "My Degree Progress",
          headerStyle: { backgroundColor: '#002145' },
          headerTintColor: '#fff',
          headerBackTitle: "Back"
        }} />
      <Stack.Screen name="Planner" component={Planner}
        options={{
          headerBackTitle: "Back",
          headerRight: () => (
            <AddCourseButton />
          ), headerStyle: { backgroundColor: '#002145' }, headerTintColor: '#fff',
        }} />
      <Stack.Screen name="AddCourses" component={AddCourses} options={{ title: "Add Courses", headerStyle: { backgroundColor: '#002145' }, headerTintColor: '#fff', }} />
      <Stack.Screen name="BrowseOtherDegrees" component={BrowseOtherDegrees}
        options={{
          title: "Browse Other Degrees",
          headerStyle: { backgroundColor: '#002145' },
          headerTintColor: '#fff',
          headerBackTitle: "Back"
        }} />

    </Stack.Navigator>
  )
}

const SettingsStack = () => {
  // const [darkMode, setDarkMode] = useState(false);
  
  // useEffect(() => {
  //   const getTheme = async () => {
  //     let value = await AsyncStorage.getItem('theme')
  //     if (value == 'dark-mode') {
  //       setDarkMode(true);
  //       console.log('theme set to dark mode')
  //     } else {
  //       setDarkMode(false);
  //       console.log('theme set to light mode')
  //     }
  //   }
  //   getTheme();
  // }, [darkMode])
  return (
    <Stack.Navigator  >
      <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ 
        title: "Settings", 
        headerStyle: { backgroundColor: '#002145' }, 
        headerTintColor: '#fff', }} />
      <Stack.Screen name="AccountScreen" component={AccountScreen}
        options={{ title: 'Account', headerStyle: { backgroundColor: '#002145' }, headerTintColor: '#fff', }} />
      <Stack.Screen name="CourseCatalog" component={CourseCatalog}
        options={{ title: 'Course Catalog', headerStyle: { backgroundColor: '#002145' }, headerTintColor: '#fff', }} />
      <Stack.Screen name="Help" component={Help}
        options={{ title: 'Help', headerStyle: { backgroundColor: '#002145' }, headerTintColor: '#fff', }} />
      <Stack.Screen name="StudentService" component={StudentService}
        options={{ title: 'Student Service Center', headerStyle: { backgroundColor: '#002145' }, headerTintColor: '#fff', }} />
      <Stack.Screen name="LinkCloud" component={LinkCloud}
        options={{ title: 'Link to ICloud', headerStyle: { backgroundColor: '#002145' }, headerTintColor: '#fff', }} />
    </Stack.Navigator>
  )
}

export default function App() {

  const TabBar = () => {

      
    return (
      <Tab.Navigator

              backBehavior='history'
              initialRouteName='HomeStack'
              screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#ddd',
                tabBarLabelStyle: {
                  fontWeight: '500',
                  fontSize: 14, marginTop: -5, marginBottom: 5,
                  color: 'white'
                },

                tabBarStyle: {
                  backgroundColor: '#002145',
                  height: 70,
                },

              }}
            >
              <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: () => <IconEntypo name="home" size={30} color='white' />
                }}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsStack}
                options={{
                  tabBarLabel: 'Settings',
                  tabBarIcon: () => <IconIonicons name="ios-settings-sharp" size={30} color='white' />
                }}
              />

            </Tab.Navigator>
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen'>
              <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
              <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
              <Stack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>

  );
}
