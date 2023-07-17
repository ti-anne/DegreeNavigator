import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const url = 'https://ssc.adm.ubc.ca/sscportal/servlets/SSCMain.jsp';

function StudentService() {
    return (
        <View style={{flex:1}}>
        <WebView
        source = {{uri: url}}
        onLoad = {() => console.log('SSC Loaded')} />
        </View>
    )
}

export default StudentService;