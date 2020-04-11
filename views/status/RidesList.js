import LottieView from 'lottie-react-native';
import { List, Card, CardItem, Radio } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { HeeboText } from '../../components/HeeboText';
import RequestRow from './RequestRow';
import OfferRow from './OfferRow';

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
  },
  cardItem: {
    elevation: 0,
    height: 30,
    paddingTop: 0,
    paddingBottom: 0,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.85
  },
  textDesign: {
    marginHorizontal: 5,
    fontSize: 17,
    color: 'white'
  }
});

const RidesList = ({ rides, isDriver, phoneNumber, showMyOffers }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [listRowsOfDriver, setListRowsOfDriver] = useState(undefined);
  const [listRowsOfDriverReady, setListRowsOfDriverReady] = useState(false);
  const [listRowsOfPassenger, setListRowsOfPassenger] = useState(undefined);
  const [listRowsOfPassengerReady, setListRowsOfPassengerReady] = useState(false);
  const [listRowsOfOffers, setListRowsOfOffers] = useState(undefined);
  const [listRowsOfOffersReady, setListRowsOfOffersReady] = useState(false);

  const showNoRides = () => {
    return (
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottie}
          source={require('../../assets/lottie/no-rides-founded.json')}
          autoPlay
          loop={false}
        />
        {!isDriver && <HeeboText style={styles.notFound}>אין לך טרמפים...</HeeboText>}
        <HeeboText style={styles.notFound}>{noRidesText()}</HeeboText>
      </View>
    )
  };

  const noRidesText = () => {
    if (isDriver) {
      return showMyOffers ? 'תציע יא קמצן!' : 'עוד לא ביקשו ממך...';
    }

    return 'לך חפש!';
  };

  const createListRowsOfOffers = () => {
    if (isLoading && !listRowsOfOffersReady) {
      var offersList = [];

      if (rides.offers !== undefined) {
        rides.offers.forEach(offer => {
          console.log(offer);
          offersList.push(<OfferRow offerID={offer.offerID} offerData={offer.offerData} />)
        });
      }

      setListRowsOfOffers(offersList);
      setListRowsOfOffersReady(true);
      setIsLoading(false);
    }
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
    return !isDriver ? listRowsOfPassenger : showMyOffers ? listRowsOfOffers : listRowsOfDriver;
  };

  if (isLoading) {
    if (!listRowsOfPassenger) {
      createListRowsOfPassenger();
    } else if (!listRowsOfDriverReady) {
      createListRowsOfDriver();
    } else if (!listRowsOfOffersReady) {
      createListRowsOfOffers();
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
    if (showMyOffers) {
      if (listRowsOfOffers != undefined && listRowsOfOffers.length == 0) {
        return (showNoRides());
      }
    } else if (listRowsOfDriver != undefined && listRowsOfDriver.length == 0) {
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