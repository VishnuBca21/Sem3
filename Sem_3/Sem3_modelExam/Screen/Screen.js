import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import MainScreen from './MainScreen';
import SignIn from './SignIn'
import Register from './Register'
import Education from './Education'
import Profile from './Profile'

export default function Screen() {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  }
});