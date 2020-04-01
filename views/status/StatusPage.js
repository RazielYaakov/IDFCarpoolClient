import React from 'react';
import { Container, Content } from 'native-base';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import StatusForm from './statusForm';

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
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

const StatusPage = ({ navigation }) => {
  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/homeScreenPhoto2.jpg')}
        style={styles.backgroundImage}>
        <Content contentContainerStyle={styles.container}>
          <StatusForm />
        </Content>
      </ImageBackground>
    </Container>
  );
};

export default StatusPage;




