import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Top from "../components/Top";
import { create } from "apisauce";
import Loading from "../components/Loading";
import Click from "../components/Click";
import TextBox from "../components/TextBox";
import { useNavigation } from "@react-navigation/native";

export default function EditProfile() {
  const nav = useNavigation()
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [RegNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [Batch, setBatch] = useState("");
  const [Dept, setDept] = useState("");
  const [section, setSection] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const output = async () => {
    setLoading(true);
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTAwNTlhZWMwN2UwZjFjZDI1ZjgxMiIsIlJlZ05vIjoiMVAyMU1DMDU5IiwiaWF0IjoxNjcxNDMzNjcxfQ.LX2XdQEvxxFQJNus1dbOLgtlE4ZRXxqI3ChFh1zrJZk";
    const api = create({
      baseURL: "http://localhost:5000/api/student",
      headers: { "x-auth-token": token },
    });
    let result = await api.get("/profile");
    setTimeout(() => setLoading(false), 1000);
    setData(result.data);
    console.log(result.data);
    setName(result.data[0].name);
    setEmail(result.data[0].email);
    setRegNo(result.data[0].RegNo);
    setDept(result.data[0].Dept);
    setBatch(result.data[0].Batch);
    setSection(result.data[0].Section);
  };

  useEffect(() => {
    output();
  }, []);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setMessage("You Cannot Change Email")
    setTimeout(() => setMessage(""), 3000);
  };
  const changeRegNo = (e) => {
    setMessage("You Cannot Change Register Number")
    setTimeout(() => setMessage(""), 3000);
  };
  const changeBatch = (e) => {
    setBatch(e.target.value);
  };
  const changeDept = (e) => {
    setDept(e.target.value);
  };
  const changeSection = (e) => {
    setSection(e.target.value);
  };

  const edit = async () => {
    setLoading(true);
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTAwNTlhZWMwN2UwZjFjZDI1ZjgxMiIsIlJlZ05vIjoiMVAyMU1DMDU5IiwiaWF0IjoxNjcxNDMzNjcxfQ.LX2XdQEvxxFQJNus1dbOLgtlE4ZRXxqI3ChFh1zrJZk";
    const api = create({
      baseURL: "http://localhost:5000/api/student",
      headers: {
        "x-auth-token": token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    let result = await api.put(
      "/update",
      `name=${name}&Dept=${Dept}&Section=${section}&Batch=${Batch}`
    );
    setTimeout(() => setLoading(false), 1000);
    if (result.data.result != undefined) {
      setData(result.data.result);
      setSuccess("Updated Successfuly")
      setTimeout(() => setSuccess(""), 3000);
    } else {
      setMessage(result.data.message);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const back = ()=>{
    console.log("back")
    nav.navigate("Profile")
  }

  return (
    <View style={styles.container}>
      <Top title="Edit Profile" icon="arrowleft" color={"#fff"} onPress={back}/>
      {loading ? (
        <View style={styles.loading}>
            <Loading />
        </View>
      ) : (
        <View style={styles.main}>
          <FlatList
            style={styles.flatList}
            data={data}
            keyExtractor={(user) => user._id.toString()}
            renderItem={({ item }) => {
              return (
                <>
                  <TextBox
                    text="Name"
                    value={name}
                    onChange={changeName}
                  />
                  <TextBox
                    text="Email"
                    value={email}
                    onChange={changeEmail}
                  />
                  <TextBox
                    text="RegNo"
                    value={RegNo}
                    onChange={changeRegNo}
                  />
                  <TextBox text="Batch" value={Batch} onChange={changeBatch} />
                  <TextBox
                    text="Section"
                    value={section}
                    onChange={changeSection}
                  />
                  <TextBox
                    text="Dept"
                    value={Dept}
                    onChange={changeDept}
                  />
                  <Text style={[styles.err, styles.message]}>{message}</Text>
                  <Text style={[styles.success, styles.message]}>{success}</Text>
                </>
              );
            }}
          />
          <View style={styles.clickContainer}>
            <Click
              buttonStyle={styles.button}
              textStyle={styles.text}
              text="SUBMIT"
              onPress={() => edit()}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading:{
    flex:1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%"
  },
  main: {
    flex: 1,
    width: "100%",
  },
  flatList:{
    marginTop: "3rem",
    width:"90%",
    alignSelf:"center"
  },
  text: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  clickContainer: {
    alignSelf: "center",
    width: "90%",
    marginBottom: "1rem",
    textAlign: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4679ee",
    width: "100%",
    height: 40,
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
  },
  message: {
    margin: ".5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign:"center"
  },
  err: {
    color: "red",
  },
  success:{
    color: "green",
  }
});
