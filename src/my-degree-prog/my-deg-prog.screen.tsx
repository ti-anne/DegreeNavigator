import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  View,
  SectionList,
  StatusBar,
} from 'react-native';
import MajorButton from '../../library/buttons/mdp-buttons';
import DegReq from '../../library/text/degree-requirements';

const CS: {title: string, data: string[]}[] = [
  {
    title: 'First Year',
    data: [
      'COSC 111 or 123',
      'COSC 121',
      'MATH 100',
    ]
  },
  {
    title: 'Second Year',
    data: [
      'COSC 211, 221, 222',
      'MATH 221',
      'STAT 230',
    ]
  },
  {
    title: 'Third Year',
    data: [
      'COSC 320',
      'COSC 304, 310, 341',
      'COSC 499', 'PHIL 315'
    ]
  }
]

const VS: {title: string, data: string[]}[] = [
  {
    title: 'First Year',
    data: [
      'VISA 106, 108',
      'CCS 150',
      'VISA 090'
    ]
  },
  {
    title: 'Second Year',
    data: ['VISA 206','VISA 215', 'VISA 225']
  },
  {
    title: 'Third Year',
    data: ['FILM 303', 'FILM 371', 'VISA upper']
  }
]



enum Majors {
  csM = "Computer Science Major",
  vsm = "Visual Art Minor"
}

const Separator = () => <View style={styles.separator} />;


function MyDegreeProgress() {
  const [selectedName, setSelectedName] = React.useState('');
  const sections: {title: string, data: string[]}[] = [
    ...(selectedName === Majors.csM ? CS : VS),
  ];
    return (
      <SafeAreaView>
        <StatusBar
        barStyle={'light-content'} />
        <SectionList
          
          sections = {sections}
          keyExtractor={(item, index) => item + index}
          style={{flexDirection: 'column'}}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          ListHeaderComponent = {
            <>
            <DegReq
              text={`ENGL | CORH requirements: fulfilled\nScience requirements: fulfilled\nElective requirements: incomplete`}
              title="Bachelor of Science"
            />
            <Separator />
            <View style={styles.container}>
                <MajorButton onSelected={(name) => {setSelectedName(name)}} />
              </View>
            </>
          }
          ListFooterComponent = {
            <><Separator />
            <DegReq
              text={`VISA 137, FREN 101, DATA 101
              \nPlans for MDP: green background color or graphics to indicate completion`}
              title="Electives completed"
            />
            <Separator />
            </>
          }
          />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginHorizontal: 10,
      marginTop: -5,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    item: {
      backgroundColor: '#D9D9D9',
      borderLeftWidth:1,
      borderRightWidth:1,
      borderBottomWidth:1,
      padding: 10,
      marginHorizontal: 10,
    },
    header: {
      fontSize: 16,
      borderLeftWidth:1,
      marginHorizontal: 10,
      borderRightWidth:1,
      backgroundColor: '#002145',
      color: 'white',
      padding: 5,
    },
    title: {
      fontSize: 12,
    },
  });

export default MyDegreeProgress;