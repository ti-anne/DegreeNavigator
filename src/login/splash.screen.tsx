import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { ActivityIndicator, View, Image } from 'react-native';

function SplashScreen({navigation}:{navigation:any}) {

  const [isSignedIn, setIsSignedIn] = React.useState<boolean>();

  const getUserToken = async () => {
    try {
      const value = await AsyncStorage.getItem('userData');
      if (value !== null) {
        setIsSignedIn(true)
        console.log('logged in, no login screen');
        navigation.navigate('TabBar')
      } else { 
        setIsSignedIn(false); 
        console.log('was logged out so:', isSignedIn);
        navigation.navigate('LogIn') }

    } catch (err) { console.log(err) }
  }

  useEffect(() => {
    getUserToken();
  }, [])

    return (
      <View style={{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#002145',
        padding: 10 }}>
          <Image style={{ width: 150, height: 204, margin: 20 }}
          source={{
            uri: 'https://images.squarespace-cdn.com/content/v1/574f0dff1d07c0e367eabc03/1609864912784-KCXOW1O1K8X398PKV125/ubc-logo2.png',
          }} />
        <ActivityIndicator size="large" />
      </View>
    );
  }

export default SplashScreen;