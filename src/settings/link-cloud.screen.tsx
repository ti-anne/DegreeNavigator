import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const url = 'https://support.apple.com/en-ca/apple-id'

function LinkCloud() {
    return (
        <View style={{flex:1}}>
        <WebView
        source = {{uri: url}}
        onLoad = {() => console.log('cloud Loaded')} />
        </View>
    )
}

export default LinkCloud;