import LottieView from 'lottie-react-native';
import { Button, Card, Icon, View } from 'native-base';
import { Container } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, AsyncStorage } from 'react-native';
import { HeeboText } from '../../components/HeeboText';
import { PHONE_LOCAL_STORAGE_NAME, USERNAME_LOCAL_STORAGE_NAME } from '../../constants/constants';
import sendRideDataRequest from '../../requests/sendRideDataRequest';
import Header from '../../components/Header';
import SearchForm from './SearchForm';
import OptionsList from './OptionsList';
import { ScrollView } from 'react-native-gesture-handler';

const FindRidePage = () => {
  const { watch, control, handleSubmit, errors } = useForm();
  const [hasOffers, setHasOffers] = useState(false);
  const [offers, setOffers] = useState(false);
  const [phoneNumberReady, setPhoneNumberReady] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [userNameReady, setUserNameReady] = useState(false);
  const [userName, setUserName] = useState(undefined);

  const loadStoredPhoneNumber = async () => {
    const phoneNumber = await AsyncStorage.getItem(PHONE_LOCAL_STORAGE_NAME);
    setPhoneNumber(phoneNumber);
    setPhoneNumberReady(true);
  };

  const loadStoredName = async () => {
    const userName = await AsyncStorage.getItem(USERNAME_LOCAL_STORAGE_NAME);
    setUserName(userName);
    setUserNameReady(true);
  };

  const showOptionsCard = (optionalOffers) => {
    console.log(optionalOffers);
    setOffers(optionalOffers);
  };

  const refreshPage = () => {
    setOffers(undefined);
  };

  if (!userNameReady) {
    loadStoredName();
  } else if (!phoneNumberReady) {
    loadStoredPhoneNumber();
  }

  if (!phoneNumberReady || !userNameReady) {
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

  return (
    <Card style={styles.findRideCard}>
      <Header />
      {!offers && <SearchForm control={control}
        watch={watch} errors={errors} userName={userName} phoneNumber={phoneNumber} showOptionsCard={showOptionsCard} />}
      {offers && <OptionsList optionalOffers={offers} phoneNumber={phoneNumber} refreshPage={refreshPage}/>}
    </Card>
  );
};

const styles = StyleSheet.create({
  findRideCard: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    elevation: 0.001,
    backgroundColor: 'transparent',
    opacity: 0.95
  },
  lottie: {
    width: 250,
    height: 250,
  },
  lottieContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    elevation: 0.001,
    backgroundColor: 'transparent',
    opacity: 0.75
  },
});

export default FindRidePage;