import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './login.screen';

const Stack = createNativeStackNavigator();

function LoginStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen name = "LogIn" component = {LogIn} 
        options = {{headerShown: false}} />
    </Stack.Navigator>
    )
}

export default LoginStack;