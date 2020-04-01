import React from 'react';
import { HeeboText } from '../../components/HeeboText';
import styled from 'styled-components';
import {
  Button,
  Container,
  Content,
  Icon,
  Card,
  CardItem,
  Body,Form,Input,Item
} from 'native-base';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
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
  tinyLogo: {
    width: 200,
    height: 200,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  iconWarpper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardStyle: {
    width: '80%',
  },
  cardForm:{
    width:'100%',
  },
  input:{
    textAlign:'right'
  },
  checkIcon:{
    color:'rgb(86,220,96)'
  }
});

const HomePage = ({ navigation }) => {
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

export default HomePage;




