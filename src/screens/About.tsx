import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <SafeAreaView >
      <StatusBar
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View>
            <Text>I am About page </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}