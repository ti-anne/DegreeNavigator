import React, {useState} from "react";
import { StyleSheet, TextInput } from "react-native";

const SearchCourse = () => {
    const [text, onChangeText] = useState('');
    return(
        <TextInput
                placeholder="Search for courses..."
                autoCapitalize='words'
                placeholderTextColor={'black'}
                clearButtonMode='while-editing'
                style={styles.inputSpace}
                value={text}
                onChangeText={onChangeText} />
    )
    
}

const styles = StyleSheet.create ({
    inputSpace: {
      height: 40,
      flex: 0.75,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'white'
    },
})

export default SearchCourse;