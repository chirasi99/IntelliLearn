import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet, Image } from 'react-native'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';


export default function Login() {
  return (
    <View>
      <Image source={require("./../Assets/Images/login.jpg")} />
          <View style={styles.container}>
            <Text style={styles.welcomeText} >Welcome to IntelliLearn</Text>
            <Text style={{textAlign:'center',marginTop:80, fontSize:20 }} >Login / Signup</Text>
          <View style={styles.button}>
            <Ionicons name="logo-google" size={24} color="white" style={{marginRight: 10}} />
            <Text style={{color:Color.white}}>Sign In With Google</Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: Color.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },

  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },

  button:{
    backgroundColor:Color.primary,
    padding:20,
    margin:30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})