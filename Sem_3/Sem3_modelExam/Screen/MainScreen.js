import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Click from '../components/Click'
export default function MainScreen() {
  return (
    <View style={styles.container} > 
      <View style={styles.main}>
          <Text style={styles.head}>Letz Connect</Text>
          <Click 
          buttonStyle = {styles.button}
          textStyle = {styles.text}
          text="Sign up"
          ></Click>
          <Click 
          buttonStyle = {styles.button}
          textStyle = {styles.text}
          text="Sign in"
          ></Click>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flex: 0.5,
    padding: "1rem",
    width: "100%", 
    alignItems:"center"
  },
  head:{
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#807edd",
    margin: ".5rem"
  },
  button:{
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#e6e6e6',
    width:'90%',
    height:40,
    textAlign:"center",
    margin: ".5rem",
    
  },
  text:{
    fontSize: "1rem",
    fontWeight:"bold",
  }
});