import { StackNavigationState, useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from "react";
import 'react-native-gesture-handler';
import { Alert, Pressable, Text, View } from "react-native";

export type RootStackParamList = {
    AddCourses: undefined;
}

const AddCourseButton = () => {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={{justifyContent:'center',marginBottom:-1}}>
        <Pressable
            onPress = {() => navigation.navigate('AddCourses')}>
            <Text style={{fontSize:32, color: 'white'}}>+</Text>
        </Pressable>
    </View>
    )
}

export default AddCourseButton;