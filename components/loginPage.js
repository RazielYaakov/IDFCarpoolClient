import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './loginForm';

export default function LoginPage() {
  return (
    <View  style={styles.container}>
      <LoginForm />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,  
  },
});
