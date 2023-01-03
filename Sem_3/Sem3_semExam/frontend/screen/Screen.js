import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Register from "./Register";
import SignIn from "./SignIn";
import EditProfile from "./EditProfile";
import Profile from "./Profile";
import AdminLogin from "./AdminLogin";
import AddFine from "./AddFine";

export default function Screen() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false}} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ headerShown: false}} />
        <Stack.Screen name="AddFine" component={AddFine} options={{ headerShown: false}} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false}} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
      {/* <Register /> */}
      {/* <AdminLogin /> */}
      {/* <AddFine /> */}
      {/* <SignIn /> */}
      {/* <EditProfile /> */}
      {/* <Profile /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 18
  },
});
