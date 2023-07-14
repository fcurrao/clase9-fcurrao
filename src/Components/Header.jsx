import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = () => {
  return (
    <View 
        style={styles.containerHeader}>
      <Text style ={styles.text}>Bonsais Orlando</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        height: '5%',
        backgroundColor: colors.peach,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
    text: {
        fontSize: 25,
        fontFamily: 'Josefin'
    }
})