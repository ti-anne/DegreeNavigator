import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Switch } from 'react-native';


enum keys {
    theme = 'theme',
    dark = 'dark-mode',
    light = 'light-mode'
  }

const ThemeToggle = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    useEffect(() => {
        getTheme();
    })

    const setTheme = async () => {
        let value = await AsyncStorage.getItem(keys.theme);
        if (value !== keys.dark) {
            AsyncStorage.setItem(keys.theme, keys.dark);
             console.log('dark mode')}
        else {
            AsyncStorage.setItem(keys.theme, keys.light);
             console.log('light mode')}
    }

    const getTheme = async () => {
        let value = await AsyncStorage.getItem(keys.theme);
        if (value !== keys.dark) {
            setIsEnabled(false)}
        else {
            setIsEnabled(true)}
    }

    return (
        <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#fff' : '#fff'}
        ios_backgroundColor="#002145"
        onValueChange={toggleSwitch}
        value={isEnabled}
        onChange={setTheme}
    />
    )
    
}

export default ThemeToggle;