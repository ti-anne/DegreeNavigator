import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProgressBar = () => {

    return (
        <View style={styles.container}>
            <Text style = {{fontWeight: '600', paddingBottom: 5}}>
                My Progress
            </Text>
            <View style={styles.barContainer}>
            <View style={styles.bar} />
        </View>
        </View>
        

    )
}

const styles = StyleSheet.create({
    barContainer: {
        width: 300,
        height: 30,
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#ccc',
        flexDirection: 'row'
    },
    bar: {
        flex: 0.25,
        borderRadius: 20,
        backgroundColor: 'green'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 35,
    }
})

export default ProgressBar;