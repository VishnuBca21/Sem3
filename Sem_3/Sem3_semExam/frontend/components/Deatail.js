
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default function Detail({heading, name, email, RegNo, Batch, Dept, Section, }){

  return(
    <View style={styles.deatailContainer}>
        <View style={styles.head}>
          <Text style={[styles.text,{color:"#2c78e4"}]}>{heading}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.deatail}>Name : {name}</Text>
          <Text style={styles.deatail}>Register Number : {RegNo}</Text>
          <Text style={styles.deatail}>Email : {email}</Text>
          <Text style={styles.deatail}>Batch : {Batch}</Text>
          <Text style={styles.deatail}>Department : {Dept}</Text>
          <Text style={styles.deatail}>Section : {Section}</Text>
        </View>
      </View>
  )
}

const styles= StyleSheet.create({
  deatailContainer:{
    display:"flex",
    justifyContent:"start",
    width:"90%",
    padding: '1rem',
    margin:"1rem",
    borderRadius:"10px",
    backgroundColor:"#f7f7fa"
  },
  text: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  head:{
    marginLeft: "1rem",
    marginBottom:".5rem"
  },
  body:{
    marginLeft: "1rem"
  },
  deatail:{
    fontSize: "1rem",
  }
})
