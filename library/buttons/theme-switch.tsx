import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Switch } from 'react-native';
import {ColorDark, ColorLight} from '../../theme/colors';

enum keys {
    theme = 'theme',
    dark = 'dark-mode',
    light = 'light-mode'
  }

type ToggleProps = {
    isToggled: (darkMode:boolean) => void
}

const ThemeToggle = (props: ToggleProps) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    useEffect(() => {
        getTheme();
    })

    const setTheme = async () => {
        let value = await AsyncStorage.getItem(keys.theme);
        if (value !== keys.dark) {
            AsyncStorage.setItem(keys.theme, keys.dark);
             console.log('dark mode')
             props.isToggled(true)}
        else {
            AsyncStorage.setItem(keys.theme, keys.light);
             console.log('light mode')
             props.isToggled(false)}
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
        trackColor={{false: ColorDark.accent, true: ColorDark.txt}}
        thumbColor={isEnabled ? ColorDark.accent : ColorLight.bg}
        ios_backgroundColor="#002145"
        onValueChange={toggleSwitch}
        value={isEnabled}
        onChange={setTheme}
    />
    )
    
}

export default ThemeToggle;