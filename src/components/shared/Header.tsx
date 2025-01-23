import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'
import { FAMILIES } from '../../theme/fonts'


export default function Header({title}:{title:string}) {
  return (
    <View style={styles.headerCotainer}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Image style={styles.logo} source={require("../../assets/logo/buddo_logo.png")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerCotainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      height:40,
      paddingHorizontal: 30,
      paddingVertical: 2,
      alignItems:"center"
    },
    title:{
      alignItems:"center",
      fontSize:18,
      color: COLORS.header_title,
      fontWeight: 700,
      fontFamily: FAMILIES.title_popins
    },
    logo:{
      width: 30,
      height: 30,
    }
})