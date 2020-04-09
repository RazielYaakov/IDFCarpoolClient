import { Container, Content } from 'native-base';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, ScrollView } from 'react-native';

import CardForm from './CardForm';
import HeaderIcon from './HeaderIcon';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 0
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
});

const LoginPage = ({ navigation }) => {
  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/homeScreenPhoto2.jpg')}
        style={styles.backgroundImage}>
        <ScrollView>
          <Content contentContainerStyle={styles.container}>
            <HeaderIcon />
            <CardForm navigation={navigation} />
          </Content>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
};

export default LoginPage;




