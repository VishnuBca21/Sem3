import * as React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import Click from '../components/Click';
import TextBox from '../components/TextBox';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Education() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Icon style={styles.icon} name="bars"  color="black" />
        <Text style={[styles.text,{color:"#fff"}]}>Add Education</Text>
      </View>
      <View style={styles.main}>
        <TextBox placeholder="Add Education (e.g., MCA)" text="Institution / University *" />
        <TextBox placeholder="Add Education (e.g., MCA)" text="Degree" />
        <TextBox placeholder="Add Education (e.g., MCA)" text="Field of Study" />
        <TextBox placeholder="Add Education (e.g., MCA)" text="Grade" />
        <TextBox placeholder="Add Education (e.g., MCA)" text="Activites and Societies" />
        <View style={styles.mainInputContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Start Year</Text>
            <TextInput  style={styles.inputbox} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>End Year</Text>
            <TextInput  style={styles.inputbox} />
          </View>
        </View>
      <TextBox placeholder="" text="Discription (Optional)" />
      </View>
      <View style={styles.clickContainer}>
        <Click
            buttonStyle={styles.button}
            textStyle={styles.text}
            text="Next >>>">
          </Click>
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
    flex: .9,
    width: '90%',
    alignItems: 'center',
    marginBottom: '1rem',
    marginTop: "1rem"
  },
  clickContainer:{
    width:"90%",
    marginBottom: '1rem',
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    display:"flex",
    flexDirection:"row"
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
  mainInputContainer:{
    width:"100%",
    display:"flex",
    flexDirection: "row",
  },
  inputContainer:{
    width: "50%",
    paddingRight:"1rem"
  },
  inputbox:{
    borderColor:"#e6e6e6",
    color: "#e6e6e6",
    borderWidth: "1px",
    padding: "10px",
    width: "100%",
  },
  inputText:{
    marginTop: ".5rem",
    marginBottom: ".5rem"
  }
});
