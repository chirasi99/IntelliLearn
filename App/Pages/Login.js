import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet, Image } from 'react-native'


export default function Login() {
  return (
    <View>
      <Image source={require("./../Assets/Images/login.jpg")} />
      <View style={styles.container}>
       <Text style={styles.welcomeText} >Welcome to IntelliLearn</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

  },

  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 
  },
})