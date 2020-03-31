import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header'
import LoginForm from './loginForm'

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Header/>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
