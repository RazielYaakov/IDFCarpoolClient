import {Container, Content} from 'native-base';
import React from 'react';
import {StyleSheet, Image,View} from 'react-native';
import SettingsForm from './settingsForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageWrapper:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:40,
    backgroundColor: '#efefef',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

const SettingsPage = ({navigation}) => {
  return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/Icon.png')}
            />
          </View>
          <SettingsForm/>
        </Content>
      </Container>
  );
};

export default SettingsPage;




