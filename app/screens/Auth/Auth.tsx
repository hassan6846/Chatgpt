import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
const icon = require('../../assets/logo.png')
import AntDesign from '@expo/vector-icons/AntDesign';

import { Input, Button, Divider } from "@rneui/themed"
import { Colors } from '../../utils/Colors'
const Auth = ({navigation}:{navigation:any}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", height: 150 }}>
        <Image style={{ height: 40, width: 40, objectFit: "contain" }} source={icon} />
      </View>
      <Text style={styles.header}>Welcome Back!</Text>
      {/* Email Container */}
      <View>
        <Input style={{ marginTop: 20, marginBottom: -20 }} inputStyle={{ borderWidth: 1, padding: 13, borderRadius: 10, borderColor: "#C2C8D0" }} inputContainerStyle={{ borderColor: "#fff" }} placeholder='Email address*' />
        <Button buttonStyle={{ height: 50, borderRadius: 8 }} containerStyle={{ padding: 10 }} color="#10A37F"  onPress={()=>navigation.navigate("Chat")} title="Continue" />
        {/* Text container */}
        <View style={{ flexDirection: "row", justifyContent: 'center', columnGap: 10, marginTop: 5, }}>
          <Text style={styles.Signup} >Don't have an account?</Text>
          <Text style={{ color: "#10A37F", fontSize: 15 }}>Signup</Text>
        </View>
        {/* Text */}
      </View>
      {/* Email Container Ends */}
      {/* Or Divider */}
      <View style={{ marginTop: 10, columnGap: 10, flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
        <View style={{ height: 0.4, backgroundColor: "#97ADB6", width: "40%" }}>

        </View>
        <Text style={{ color: "#97ADB6" }}>or</Text>
        <View style={{ height: 0.4, backgroundColor: "#97ADB6", width: "40%" }}>

        </View>
      </View>

      {/* Or divider */}

      <View style={styles.ButonContainer}>
        <Button  color="#fff" titleStyle={{ color: "#302f33", fontWeight: "100" }} buttonStyle={{ borderColor: "#97ADB6", borderWidth: 1, padding: 15, borderRadius: 10 }}  >
      <Image style={{height:20,width:20,objectFit:"contain",marginRight:50}} source={{uri:"https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"}}/>
      Continue With Google
        </Button>
        <Button  color="#fff" titleStyle={{ color: "#302f33", fontWeight: "100" }} buttonStyle={{ borderColor: "#97ADB6", borderWidth: 1, padding: 15, borderRadius: 10 }}  >
      <Image style={{height:20,width:20,objectFit:"contain",marginRight:50}} source={{uri:"https://pngimg.com/uploads/microsoft/microsoft_PNG5.png"}}/>
      Continue With Microsoft
        </Button>      
        <Button  color="#fff" titleStyle={{ color: "#302f33", fontWeight: "100" }} buttonStyle={{ borderColor: "#97ADB6", borderWidth: 1, padding: 15, borderRadius: 10 }}  >
        <AntDesign style={{marginRight:50}} name="apple1" size={24} color="black" />
      Continue With Apple
        </Button>        
        
      </View>
      <View style={styles.vertical}>
        <Text style={{color:"#10A37F"}}>Terms of Use</Text>
        <Divider orientation="vertical" width={1} />
        <Text style={{color:"#10A37F"}}>Privacy Policy</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: "bold",

  },
  Signup: {
    fontSize: 15,
    color: "#302F33"
  },
  ButonContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    rowGap: 10,
  }, vertical: {
    marginTop: 20,
    display: 'flex',

    flexDirection: 'row',
    gap: -100,
    justifyContent: 'space-evenly',
  }
})
export default Auth