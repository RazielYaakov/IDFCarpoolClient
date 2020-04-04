import { Container, Content } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import CardForm from './CardForm';
import HeaderIcon from './HeaderIcon';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    alignItems: 'center',
    marginBottom: 0
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  }
});

const LoginPage = ({ navigation }) => {
  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/homeScreenPhoto2.jpg')}
        style={styles.backgroundImage}>
        <Content contentContainerStyle={styles.container}>
          <HeaderIcon />
          <CardForm navigation={navigation} />
        </Content>
      </ImageBackground>
    </Container>
  );
};

export default LoginPage;




