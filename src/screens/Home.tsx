import { View, Text, SafeAreaView, StatusBar, ScrollView, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigation';
import { GST } from '../theme/group_styles';
import { FAMILIES, WEIGHTS } from '../theme/fonts';
import Blogs from './Home/Blogs';

type THomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
    const navigation = useNavigation<THomeScreenNavigationProp>();
     
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
      />
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
        <View style={{flex:1}}>
            <Text style={[ST.hero,{marginTop:10}]}>The Buddhist path to success and peace,</Text>
            <Text style={[ST.hero,{textTransform:"uppercase"}]}>start now!</Text>
            <Blogs />
            {/* <Text style={GST.title}>I am Home page </Text> */}
            {/* <Button title='Go About' onPress={() => navigation.navigate('About')} ></Button> */}
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}


const ST = StyleSheet.create({
    hero:{
        fontFamily: FAMILIES.title_popins,
        fontWeight: WEIGHTS.title,
        fontSize: 16,
        textAlign:"center",
        textTransform:"capitalize"
    }
})