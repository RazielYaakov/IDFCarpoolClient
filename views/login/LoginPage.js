import React from 'react';
import {Container, Content} from 'native-base';
import {ImageBackground, StyleSheet} from 'react-native';
import CardForm from './CardForm';
import HeaderIcon from './HeaderIcon';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 50,
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
            <HeaderIcon/>
            <CardForm navigation={navigation}/>
          </Content>
        </ImageBackground>
      </Container>
  );
};

export default LoginPage;




