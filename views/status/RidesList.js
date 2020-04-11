import LottieView from 'lottie-react-native';
import { List } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { HeeboText } from '../../components/HeeboText';
import RequestRow from './RequestRow';

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

const RidesList = ({ rides, isDriver, phoneNumber }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [listRowsOfDriver, setListRowsOfDriver] = useState(undefined);
  const [listRowsOfDriverReady, setListRowsOfDriverReady] = useState(false);
  const [listRowsOfPassenger, setListRowsOfPassenger] = useState(undefined);
  const [listRowsOfPassengerReady, setListRowsOfPassengerReady] = useState(false);

  const showNoRides = () => {
    return (
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottie}
          source={require('../../assets/lottie/no-rides-founded.json')}
          autoPlay
          loop={false}
        />
        <HeeboText style={styles.notFound}>אין לך טרמפים...</HeeboText>
        <HeeboText style={styles.notFound}>{isDriver ? 'תציע!' : 'לך חפש! '}</HeeboText>
      </View>
    )
  };

  const createListRowsOfDriver = () => {
    if (isLoading && !listRowsOfDriverReady) {
      var driverRequestsList = [];

      if (rides.requests !== undefined && rides.requests.asDriver !== undefined) {
        rides.requests.asDriver.forEach(request => {
          driverRequestsList.push(<RequestRow phoneNumber={phoneNumber} requestID={request.requestID} requestData={request.requestData} isDriver={true} />)
        });
      }

      setListRowsOfDriver(driverRequestsList);
      setListRowsOfDriverReady(true);
      setIsLoading(false);
    }
  };

  const createListRowsOfPassenger = () => {
    if (isLoading && !listRowsOfPassengerReady) {
      var passengerRequestsList = [];

      if (rides.requests !== undefined && rides.requests.asPassenger !== undefined) {
        rides.requests.asPassenger.forEach(request => {
          passengerRequestsList.push(<RequestRow phoneNumber={phoneNumber} requestID={request.requestID} requestData={request.requestData} isDriver={false} />)
        });
      }

      setListRowsOfPassenger(passengerRequestsList);
      setListRowsOfPassengerReady(true);
    }
  };

  const getRelevantList = () => {
    console.log('status of isDriver is ' + isDriver);
    return isDriver ? listRowsOfDriver : listRowsOfPassenger;
  };

  if (isLoading) {
    if (!listRowsOfPassenger) {
      createListRowsOfPassenger();
    } else if (!listRowsOfDriverReady) {
      createListRowsOfDriver();
    }

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
  } else if (isDriver) {
    if (listRowsOfDriver != undefined && listRowsOfDriver.length == 0) {
      return (showNoRides());
    }

  } else if (listRowsOfPassenger != undefined && listRowsOfPassenger.length == 0) {
    return (showNoRides());
  }

  return (
    <List>
      {getRelevantList()}
    </List>
  );
};

export default RidesList;