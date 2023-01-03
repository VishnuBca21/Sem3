import {View ,Text,TextInput, StyleSheet } from 'react-native';

export default function SignUp({placeholder, text, secure, customStyle}){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput placeholder={placeholder} style={[styles.inputbox,{customStyle}]} secureTextEntry={secure} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "100%",
  },
  inputbox:{
    borderColor:"#e6e6e6",
    color: "#e6e6e6",
    borderWidth: "1px",
    padding: "10px",
    width: "100%",
  },
  text:{
    marginTop: ".5rem",
    marginBottom: ".5rem"
  }
})