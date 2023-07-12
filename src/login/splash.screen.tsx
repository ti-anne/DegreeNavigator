import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

function SplashScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

export default SplashScreen;