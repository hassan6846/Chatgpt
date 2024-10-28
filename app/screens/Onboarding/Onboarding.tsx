import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Colors'
const icon = require('../../assets/bg.png')
import AntDesign from '@expo/vector-icons/AntDesign';

const Onboarding = ({navigation}:{navigation:any}) => {
  return (
    <View style={Styles.container}>
      {/* Image container */}
      <View style={Styles.ImageContainer}>
        <Image source={icon} />
      </View>
      {/* Image Container Ends */}
      {/* Text Container */}
      <View style={Styles.HeadContainer}>
        <Text style={Styles.Head}>Welcome To ChatGPT</Text>
        <Text style={Styles.Subtitle}>The dialogue format makes it possible for ChatGPT to
          answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.</Text>

      </View>
      {/* Text Container */}
      <TouchableOpacity onPress={()=>navigation.navigate("Auth")} style={Styles.Button} >


       <View  style={Styles.buttonFlow}>

      
        <Text style={Styles.ButtonText}>Try Chatgpt!</Text>
        <AntDesign name="arrowright" size={24} color={Colors.highlight} />
        </View>
      </TouchableOpacity>
    </View>
  )
}
const Styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent:"space-between",
    backgroundColor: Colors.bg
  },
  HeadContainer: {
    width: "100%",
    alignItems: "center",
    rowGap: 16,
    padding:20,
    marginBottom:10,
  },
  Head: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: "bold",
    color: Colors.highlight
  },
  Subtitle: {
    color: Colors.highlight,
    fontSize: 17,
    fontWeight: "300",
    textAlign: "center"
  },
  ImageContainer: {
    width: "100%",
   
    marginTop:300,
    justifyContent: 'center',
    alignItems: "center"
  },
  Button: {
    
    flexDirection: "row",



    alignItems: 'center',
    justifyContent: 'center',

    marginBottom:10,
    width:"100%",
  },
  ButtonText: {
    color: Colors.highlight,
    fontSize: 16,
  },
  buttonFlow:{
    width:"90%",
    borderColor: Colors.highlight,
    borderWidth: 1.4,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
    flexDirection:"row"
  }
})
export default Onboarding