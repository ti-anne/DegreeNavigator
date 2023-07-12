import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
} from 'react-native';

type ItemData = {
  id: string;
  title: string;
};

const Item = ({title}: ItemData) => (
  <View style={styles.courseBox}>
  <Text style={styles.courseText}>{title}</Text>
</View>)

enum keys {
  course = 'courseChosen'
}

const Planner = (navigation:any) => {
  const [selectedCourses, setSelectedCourses] = useState<ItemData[]>([]);
  const isFocused = useIsFocused();
  
  const retrieveCourses = async () => {
    try {
      const value = await AsyncStorage.getItem(keys.course);
      if (value !== null) {
      const retrievedCourses = JSON.parse(value);
      console.log('retrieving from async ',retrievedCourses)
      setSelectedCourses(retrievedCourses)
      console.log('set to selectedCourses ',selectedCourses)
      }
    } catch (err) {console.log(err)}
  }
  if (isFocused) retrieveCourses();
    return (
      <SafeAreaView>
        <StatusBar
        barStyle={'light-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
            <View style = {styles.container}>
              <Text style = {styles. plannerText}>
                Term 1
              </Text>
              <Text style = {styles. plannerText}>
                Term 2
              </Text>
            </View>
            <View style = {[{height : 500}, styles.plannerBox]} >
              
            {selectedCourses && (
              <FlatList
                
                data={selectedCourses}
                renderItem={({item}) => <Item title={item.title} id={''} />}
                keyExtractor={item => item.id}
              />
            )}

            </View>
            
        </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      margin: 20,
      borderRadius: 20,
      backgroundColor: '#D9D9D9',
    },
    plannerText: {
      margin: 10,
      fontSize: 18,
      fontWeight: '500',
    },
    plannerBox: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal: 20,
      borderRadius: 20,
      backgroundColor: '#D9D9D9',
    },
    courseBox: {
      padding:10, 
      marginTop: 15,
      marginHorizontal: 15,
      width: 130,
      backgroundColor:'#002145',
      borderRadius: 10
    },
    courseText: {
      fontSize : 16,
      color : 'white'
    }
  });

export default Planner;