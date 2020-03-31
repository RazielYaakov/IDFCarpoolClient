import React from 'react';
import {HebboText} from '../../components/text/HebboText';
import styled from 'styled-components';
import BackgroundImage from '../../assets/images/homeScreenPhoto2.jpg';
import { Button, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  }
});

const HomePage = ({navigation}) => {
  return (
      <Wrapper>
        <Image
            style={styles.tinyLogo}
            source={require('../../assets/images/Icon.png')}
        />
        <Header isBold={true}>משפט גנארי הסעה
        </Header>
        <LoginButton>
          <Button
              title="התחבר"
              onPress={() => navigation.navigate('Login')}/>
        </LoginButton>
      </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled(View)`
  flex:1;
  background-image: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled(HebboText)`
  margin-top: 2em;
  font-size: 2.5em;
  margin-bottom: 2em;
  font-weight: bold;
  color: #fff;
`;

const LoginButton = styled(View)`
  display: inline-block;
  border-radius: 3px;
  width: 12em;
`;

