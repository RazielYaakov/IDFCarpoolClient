import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/loginPage'

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
