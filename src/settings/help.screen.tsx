import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const contact = 'https://www.ubc.ca/about/contact.html'

function Help() {
    return (
        <View style={{flex:1}}>
        <WebView
        source = {{uri: contact}}
        onLoad = {() => console.log('Help Loaded')} />
        </View>
    )
}

export default Help;