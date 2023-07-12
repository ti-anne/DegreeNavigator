import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchCourse from '../../library/buttons/search-course';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

type ItemData = {
    id: string;
    title: string;
    isSelected: boolean;
  };


let data: ItemData[] = [
    {id: 'COSC 101', title: 'COSC 101: Digital Citizenship', isSelected: false},
    {id: 'COSC 111', title: 'COSC 111: Computer Programming I', isSelected: false},
    {id: 'COSC 121', title: 'COSC 121: Computer Programming II', isSelected: false},
    {id: 'COSC 122', title: 'COSC 122: Computer Fluency', isSelected: false},
    {id: 'COSC 123', title: 'COSC 123: Computer Creativity', isSelected: false},
    {id: 'COSC 210', title: 'COSC 210: Software Construction', isSelected: false},
    {id: 'COSC 211', title: 'COSC 211: Machine Architecture', isSelected: false},
    {id: 'COSC 221', title: 'COSC 221: Introduction to Discrete Structures', isSelected: false},
    {id: 'COSC 222', title: 'COSC 222: Data Structures', isSelected: false},
    {id: 'COSC 301', title: 'COSC 301: Introduction to Data Analytics', isSelected: false},
    {id: 'COSC 303', title: 'COSC 303: Numerical Analyses', isSelected: false},
    {id: 'COSC 304', title: 'COSC 304: Introduction to Databases', isSelected: false},
    {id: 'COSC 305', title: 'COSC 305: Project Management', isSelected: false},
    {id: 'COSC 310', title: 'COSC 310: Software Engineering', isSelected: false},
    {id: 'COSC 320', title: 'COSC 320: Analysis of Algorithms', isSelected: false},
    {id: 'COSC 322', title: 'COSC 322: Introduction to Artificial Intelligence', isSelected: false},
    {id: 'COSC 328', title: 'COSC 238: Introduction to Networks', isSelected: false},
]
type CourseProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};
const Item = ({item, onPress, backgroundColor, textColor}: CourseProps) => (
    <TouchableOpacity 
    onPress={onPress} 
    style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}
      </Text>
    </TouchableOpacity>
  );


  enum keys {
    course = 'courseChosen'
  }

function AddCourses({navigation}:{navigation:any}) {
    const [selectedCourses, setSelectedCourses] = useState<ItemData[]>([]);
    const isFocused = useIsFocused();

    const getSelectedCourses = async () => {
      try {
        const value = await AsyncStorage.getItem(keys.course);
        console.log('get previous selectedCourses: ', value);
        if (value !== null) {
          let prevSelectedCourses = JSON.parse(value);
          setSelectedCourses(prevSelectedCourses);
          data.forEach((item) => 
          {if (item.id === prevSelectedCourses.id)
            item.isSelected = prevSelectedCourses.isSelected})
        } else setSelectedCourses([]);
      } catch (error) {console.log(error);}
      }
    if (isFocused) getSelectedCourses();

    const handleItemPress = (item:ItemData) => {
      let updatedCourses = [];
      console.log('\n\nselectedCourses: ', selectedCourses);
      
      if (!item.isSelected) {
        item.isSelected = true;
        updatedCourses = [...selectedCourses, item];
        console.log('\nitem selected in handleItemPress: ', item) 
      } else {
        item.isSelected = false;
        updatedCourses = selectedCourses.filter((selectedItem) => selectedItem.id !== item.id)
        console.log('\nitem deselected in handleItemPress: ', item, '\nall items selected: ', selectedCourses) 
      }
      setSelectedCourses(updatedCourses);
      AsyncStorage.setItem(keys.course, JSON.stringify(updatedCourses));
      console.log('saving in async on each press: ', updatedCourses);
      
    };

    const handleDonePress = () => {
      try {
        
        console.log('confirm selecting: ', selectedCourses)
        navigation.navigate('Planner')
      } catch (err) {console.log(err)}
    }

    const renderItem = ({item}: {item: ItemData}) => {
        const backgroundColor = item.isSelected ? '#002145' : 'white';
        const color = item.isSelected ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => handleItemPress(item)}
            backgroundColor={backgroundColor}
            textColor={color}
          />
        );
      };

    return (
        <SafeAreaView>
          <FlatList
            data = {data} 
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ListHeaderComponent = {
            <>
            <View style={styles.container}>
            <SearchCourse />
             
            <Pressable 
            
              onPress =   { handleDonePress}
              style = {{backgroundColor: '#002145', padding: 10, flex: 0.2, borderRadius: 10, height: 40}}>
                      {({pressed}) => (
              <Text style={{color: 'white', textAlign: 'center'}}>Confirm</Text>
                      )}
            </Pressable>
            </View>
            </>
          } />
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        margin: 10,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    item: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: 'black',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        padding: 10,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 14,
    },
  });

export default AddCourses;