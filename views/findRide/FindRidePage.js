import LottieView from 'lottie-react-native';
import { Container } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { PHONE_LOCAL_STORAGE_NAME, USERNAME_LOCAL_STORAGE_NAME } from '../../constants/constants';
import sendRideDataRequest from '../../requests/sendRideDataRequest';
import Header from '../../components/Header';
import SearchForm from './SearchForm';

const FindRidePage = () => {
  const { watch, control, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [rides, setRides] = useState(undefined);
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

  const searchRides = async ({ source, destination, date }) => {
    setIsLoading(true);
    const rides = await sendRideDataRequest({ source, destination, date, phoneNumber, homeToBase });
    setIsLoading(false);
    setRides(rides.data);
  };
  
  if(!userNameReady) {
    loadStoredName();
  } else if(!phoneNumberReady){
    loadStoredPhoneNumber();
  }

  if (!phoneNumberReady || !userNameReady) {
    

    return (
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottie}
          source={require('../../assets/lottie/3657-small-car.json')}
          autoPlay
          loop={true}
        />
      </View>
    );
  }

  return (
    <Container>
      <Header/>
      <SearchForm submit={handleSubmit(searchRides)} control={control}
        watch={watch} errors={errors} userName={userName} phoneNumber={phoneNumber}/>
    </Container>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 250,
    height: 250,
  },
  lottieContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1
  },
});

export default FindRidePage;