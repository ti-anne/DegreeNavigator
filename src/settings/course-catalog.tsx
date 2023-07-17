import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

enum url {
    course = 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-all-departments'
  }

function CourseCatalog() {
    return (
        <View style={{flex:1}}>
        <WebView
        source = {{uri: url.course}}
        onLoad = {() => console.log('Loaded')} />
        </View>
    )
}

export default CourseCatalog;