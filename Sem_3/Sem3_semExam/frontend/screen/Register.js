import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Click from "../components/Click";
import TextBox from "../components/TextBox";
import Top from "../components/Top";
import { create } from "apisauce";
import Loading from "../components/Loading";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const nav = useNavigation();
  
  const [name, setName] = useState("");
  const [RegNo, setRegNo] = useState("");
  const [Batch, setBatch] = useState("");
  const [Dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeRegNo = (e) => {
    setRegNo(e.target.value);
  };
  const changeBatch = (e) => {
    setBatch(e.target.value);
  };
  const changeDept = (e) => {
    setDept(e.target.value);
  };

  const output = async () => {
    setLoading(true);
    console.log(`name=${name}&RegNo=${RegNo}&email=${email}&Dept=${Dept}&Batch=${Batch}&password=${password}`);
    const api = create({
      baseURL: "http://localhost:5000/api/student",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    let result = await api.post(
      "/register",
      `name=${name}&RegNo=${RegNo}&email=${email}&Dept=${Dept}&Batch=${Batch}&password=${password}`

    );
    setTimeout(() => setLoading(false), 1000);
    if (result.data.message != undefined) {
      setData(result.data.token);
      nav.navigate("Profile")
      console.log(result.data)
      console.log(data);
    } else {
      setMessage(result.data.message);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Top title="Sign Up" />
      {loading ? (
        <View style={styles.loading}>
          <Loading />
        </View>
      ) : (
        <>
          <View style={styles.main}>
            <Text style={styles.head}>Fine Management</Text>
            <TextBox
              placeholder="Name"
              text="Name"
              onChange={changeName}
              value={name}
            />
            <TextBox
              placeholder="Reg Number"
              text="Reg Number"
              onChange={changeRegNo}
              value={RegNo}
            />
            <TextBox
              placeholder="Email"
              text="Email ID"
              onChange={changeEmail}
              value={email}
            />
            <TextBox
              placeholder="Password"
              text="Password"
              secure={true}
              onChange={changePassword}
              value={password}
            />
            <TextBox
              placeholder="Department"
              text="Department"
              onChange={changeDept}
              value={Dept}
            />
            <TextBox
              placeholder="Batch"
              text="Batch"
              onChange={changeBatch}
              value={Batch}
            />
            <Text style={styles.err}>{message}</Text>
          
          <View style={styles.clickContainer}>
            <Click
              buttonStyle={styles.button}
              textStyle={styles.text}
              text="Sign up"
              onPress={output}
            ></Click>
            <Text onPress={()=>nav.navigate("SignIn")}>Already You Have an Account? Sign In </Text>
          </View>
        </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading:{
    flex:1,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"100%"
  },
  main: {
    flex: 0.9,
    width: "90%",
    alignItems: "center",
    marginBottom: ".2rem",
  },
  head: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#807edd",
    marginVertical:".5rem"
  },
  clickContainer: {
    width: "90%",
    bottom: 0,
    textAlign: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4679ee",
    width: "100%",
    height: 40,
    marginBottom: ".5rem",
  },
  text: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
  },
  err: {
    color: "red",
    margin: "1rem",
    fontSize: "1rem",
    fontWeight: "bold",
  },
});
