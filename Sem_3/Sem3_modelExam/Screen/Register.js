import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Click from '../components/Click';
import TextBox from '../components/TextBox';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Icon style={styles.icon} name="arrow-left"  color="black" />
        <Text style={[styles.text,{color:"#fff"}]}>Sign up</Text>
      </View>
      <View style={styles.main}>
          <Text style={styles.head}>Letz Connect</Text>
        <TextBox placeholder="Username" text="Username" />
        <TextBox placeholder="Email ID" text="Email ID" />
        <TextBox placeholder="Password" text="Password" secure={true} />
        <TextBox placeholder="Password" text="Password" secure={true} />
      </View>
      <View style={styles.clickContainer}>
        <Click
            buttonStyle={styles.button}
            textStyle={styles.text}
            text="Sign up">
          </Click>
        <Text>Already You Have an Account? Sing In Here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    height:"40px",
    width:"100%",
    position:"absolute",
    top:0,
    textAlign:"center",
    backgroundColor:"#2c78e4",
  },
  icon:{
    position: "absolute",
    left: 10,
    fontSize:"1.5rem",
    color:"#fff"
  },
  main: {
    flex: .8,
    width: '90%',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  head: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#807edd',
    margin: '.5rem',
  },
  clickContainer:{
    width:"90%",
    marginBottom: '1rem',
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
    width: '100%',
    height: 40,
    marginBottom:"1rem"
  },
  text: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
});
