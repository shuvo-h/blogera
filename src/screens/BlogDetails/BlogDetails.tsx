import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../../navigation/navigation';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';





type TProps = {
    route: RouteProp<RootStackParamList, 'BlogDetail'>;
    navigation: NativeStackNavigationProp<RootStackParamList, 'BlogDetail'>
  };
  
export default function BlogDetails({route}:TProps) {
    const {blog} = route.params;
    const { width } = useWindowDimensions();

   
    
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{blog.title.rendered}</Text>
      <RenderHtml
      contentWidth={width}
      source={{html:blog.content.rendered}}
    />
    </ScrollView>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    content: {
      fontSize: 16,
      lineHeight: 22,
      color: '#333',
    },
  });
  