import LottieView from 'lottie-react-native';
import { Container } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import sendRideDataRequest from '../../requests/sendRideDataRequest';
import AvailableRidesList from './AvailableRidesList';
import Header from './Header';
import SearchForm from './SearchForm';

const FindRidePage = () => {
  const { watch, control, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [rides, setRides] = useState(undefined);

  const searchRides = async ({ source, destination, date }) => {
    setIsLoading(true);
    const rides = await sendRideDataRequest({ source, destination, date, phoneNumber, homeToBase });
    setIsLoading(false);
    setRides(rides.data);
  };

  if (isLoading) {
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
      <Header />
      {rides ?
        <AvailableRidesList rides={rides}
          emptyRides={() => setRides(null)} /> :
        <SearchForm submit={handleSubmit(searchRides)} control={control}
          watch={watch} errors={errors} />}

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