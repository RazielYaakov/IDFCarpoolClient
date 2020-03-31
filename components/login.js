import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header'

export default function Login() {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
