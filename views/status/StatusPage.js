import { Container, Content } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import StatusForm from './statusForm';
import showMyRidesRequest from './showMyRidesRequest';

const FAKE_TELEPHONE = "0525217550"

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
  var myRides = getMyRideRequests(FAKE_TELEPHONE);
  
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

const getMyRideRequests = async (phoneNumber) => {
  try {
    var myRides = await showMyRidesRequest(FAKE_TELEPHONE);
    console.log(myRides);

    return myRides;
  }
  catch (exception) {
    console.log("Error connecting the server");
  }
}

export default StatusPage;




