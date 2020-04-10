import LottieView from 'lottie-react-native';
import { List } from 'native-base';
import React, { useState } from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import { HeeboText } from '../../components/HeeboText';
import { PHONE_LOCAL_STORAGE_NAME } from '../../constants/constants';
import showMyRidesRequest from '../../requests/showMyRidesRequest';
import RideRow from './RideRow';

const styles = StyleSheet.create({
  lottie: {
    width: 250,
    height: 250,
  },
  lottieContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1
  },
  notFound: {
    fontSize: 40,
  }
});

const RidesList = ({ isDriver }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [listRows, setListRows] = useState(undefined);
  const [phoneNumberReady, setPhoneNumberReady] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(undefined);

  const loadStoredPhoneNumber = async () => {
    const phoneNumber = await AsyncStorage.getItem(PHONE_LOCAL_STORAGE_NAME);
    setPhoneNumber(phoneNumber);
    setPhoneNumberReady(true);
  }

  const getUserRides = async ({ phoneNumber }) => {
    const myRides = await showMyRidesRequest({ phoneNumber });
    setListRows(createListRows(myRides));
    setIsLoading(false);
  };

  if (isDriver) {
    console.log(isDriver);
    return (<HeeboText>רזי אתה מלך</HeeboText>)
  }

  if (isLoading) {
    if (!phoneNumberReady) {
      loadStoredPhoneNumber();
    }

    getUserRides({ phoneNumber });

    return (
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottie}
          source={require('../../assets/lottie/4966-onboarding-car.json')}
          autoPlay
          loop={true}
        />
      </View>
    );
  } else if (listRows != undefined && listRows.length == 0) {
    return (
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottie}
          source={require('../../assets/lottie/no-rides-founded.json')}
          autoPlay
          loop={false}
        />
        <HeeboText style={styles.notFound}>אין לך טרמפים...</HeeboText>
        <HeeboText style={styles.notFound}>לך חפש!</HeeboText>
      </View>
    )
  }

  return (
    <List>
      {listRows}
    </List>
  );
};

const createListRows = (rides) => {
  console.log(rides);
  if (false) {
    var listRows = [];
    const valuesPosition = 1;

    rides.forEach(ride => {
      var values = ride[valuesPosition]

      listRows.push(<RideRow
        name={values.driver.name}
        phoneNumber={values.driver.phoneNumber}
        source={values.source}
        destination={values.destination}
        date={values.dateTime}
        driverAccepted={values.driver.accepted}
        passengerAccepted={values.passenger.accepted}
        rideAccepted={values.accepted}
      />);
    });

    return listRows;
  }

  return [];
}

export default RidesList;