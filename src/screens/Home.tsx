import { View, Text, SafeAreaView, StatusBar, ScrollView, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigation';
import { GST } from '../theme/group_styles';
import { FAMILIES, WEIGHTS } from '../theme/fonts';

type THomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
    const navigation = useNavigation<THomeScreenNavigationProp>();
     
  return (
    <SafeAreaView >
      <StatusBar
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View>
            <Text style={ST.hero}>Welcome to Buddist</Text>
            <Text style={GST.title}>I am Home page </Text>
            <Button title='Go About' onPress={() => navigation.navigate('About')} ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


const ST = StyleSheet.create({
    hero:{
        fontFamily: FAMILIES.title_popins,
        fontWeight: WEIGHTS.title,
        fontSize: 25,
        textAlign:"center",
        marginVertical: 15,
    }
})