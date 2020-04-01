import React from 'react';
import { HeeboText } from '../../components/text/HeeboText';
import styled from 'styled-components';
import { Button, View, Image, StyleSheet, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  }
});

const HomePage = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/images/homeScreenPhoto2.jpg')} style={{flex:1}}>
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
            onPress={() => navigation.navigate('Login')} />
        </LoginButton>
      </Wrapper>
    </ImageBackground>
  );
};

export default HomePage;

const Wrapper = styled(View)`
  flex:1;
  justify-content: center;
  align-items: center;
`;

const Header = styled(HeeboText)`
  margin-top: 10;
  font-size: 30;
  margin-bottom: 20;
  font-weight: bold;
  color: #fff;
`;

const LoginButton = styled(View)`
  border-radius: 3;
  width: 100;
`;

