import LottieView from 'lottie-react-native';
import { Button, Card, Icon, View } from 'native-base';
import React, { useState } from 'react';
import { AsyncStorage, ScrollView, StyleSheet } from 'react-native';

import Header from '../../components/Header';
import { HeeboText } from '../../components/HeeboText';
import { PHONE_LOCAL_STORAGE_NAME } from '../../constants/constants';
import showMyRidesRequest from '../../requests/showMyRidesRequest';
import RidesList from './RidesList';
import TypeOfUser from './TypeOfUser';

const styles = StyleSheet.create({
  statusCard: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    elevation: 0.001,
    backgroundColor: 'transparent',
    opacity: 0.9
  },
  cardItem: {
    paddingTop: 0,
    paddingBottom: 0,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginVertical: 3,
  },
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
  refreshButton: {
    backgroundColor: 'black',
    elevation: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '5%',
    opacity: 0.85
  },
  refreshText: {
    marginHorizontal: 5,
    fontSize: 17,
    color: 'white'
  }
});

const StatusPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [phoneNumberReady, setPhoneNumberReady] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [isRidesReady, setRidesReady] = useState(false);
  const [rides, setRides] = useState(undefined);
  const [isDriverSelected, setDriverSelected] = useState(false);

  const loadStoredPhoneNumber = async () => {
    const phoneNumber = await AsyncStorage.getItem(PHONE_LOCAL_STORAGE_NAME);
    setPhoneNumber(phoneNumber);
    setPhoneNumberReady(true);
  };

  const getUserRides = async () => {
    const userRides = await showMyRidesRequest({ phoneNumber });
    setRides(userRides);
    setRidesReady(true);
    setIsLoading(false);
  };

  const changeUserType = (isDriver) => {
    console.log('changing isDriver to ' + isDriver);
    setDriverSelected(isDriver);
  };

  const refreshPage = () => {
    setIsLoading(true);
    setRidesReady(false);
    setDriverSelected(false);
  }

  if (isLoading) {
    if (!phoneNumberReady) {
      console.log('loading phoneNumber from cache')
      loadStoredPhoneNumber();
    } else if (!isRidesReady) {
      console.log('loading userts from server')
      getUserRides();
    }

    console.log('showing lottie')
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
  }

  console.log('changing view because isDriver changed to ' + isDriverSelected);
  return (
    <Card style={styles.statusCard}>
      <Header />
      <TypeOfUser isDriver={isDriverSelected} handleChange={changeUserType} />
      <ScrollView>
        <RidesList rides={rides} isDriver={isDriverSelected} phoneNumber={phoneNumber}/>
      </ScrollView>
      <Button style={styles.refreshButton} onPress={() => refreshPage()}>
        <HeeboText style={styles.refreshText} isBold={true}>עדכן נסיעות</HeeboText>
        <Icon name='refresh' type={'SimpleLineIcons'} />
      </Button>
    </Card>
  );
};

export default StatusPage;




