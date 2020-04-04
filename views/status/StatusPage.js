import { Container, Content } from 'native-base';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import StatusForm from './statusForm';
import showMyRidesRequest from '../../requests/showMyRidesRequest';
import RidesList from './RidesList';

const FAKE_TELEPHONE = "0525217550"

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#efefef'
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
    <Container style={styles.container}>
        <Content contentContainerStyle={styles.container}>
          <RidesList/>
        </Content>
    </Container>
  );
};

const getMyRideRequests = async (phoneNumber) => { d
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




