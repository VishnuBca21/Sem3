import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Click from "../components/Click";
import TextBox from "../components/TextBox";
import Top from "../components/Top";
import { create } from "apisauce";
import Loading from "../components/Loading";

export default function AddFine() {
  const [RegNo, setRegNo] = useState("");
  const [Batch, setBatch] = useState("");
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  
  const changeReason = (e) => {
    setReason(e.target.value);
  };
  const changeRegNo = (e) => {
    setRegNo(e.target.value);
  };
  const changeBatch = (e) => {
    setBatch(e.target.value);
  };
  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  const output = async () => {
    setLoading(true);
    
    const api = create({
      baseURL: "http://localhost:5000/api//fine",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    let result = await api.post(
      "/add",
      `reason=${reason}&RegNo=${RegNo}&amount=${amount}&Batch=${Batch}`

    );
    setTimeout(() => setLoading(false), 1000);
    if (result.data.result != undefined) {
      setData(result.data.result);
      setSuccess("Added Successfuly")
      setTimeout(() => setSuccess(""), 3000);
    } else {
      setMessage(result.data.message);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Top title="Add Fine" />
      {loading ? (
        <View style={styles.loading}>
          <Loading />
        </View>
      ) : (
        <>
          <View style={styles.main}>
            <Text style={styles.head}>Fine Management</Text>
            <TextBox
              placeholder="Reg Number"
              text="Reg Number"
              onChange={changeRegNo}
              value={RegNo}
            />
            <TextBox
              placeholder="Reason"
              text="Reason"
              onChange={changeReason}
              value={reason}
            />
            <TextBox
              placeholder="Amount"
              text="Amount"
              onChange={changeAmount}
              value={amount}
            />
            
            <TextBox
              placeholder="Batch"
              text="Batch"
              onChange={changeBatch}
              value={Batch}
            />
            <Text style={[styles.err, styles.message]}>{message}</Text>
                  <Text style={[styles.success, styles.message]}>{success}</Text>
          
          <View style={styles.clickContainer}>
            <Click
              buttonStyle={styles.button}
              textStyle={styles.text}
              text="ADD"
              onPress={output}
            ></Click>
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
