import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { AsyncStorage, I18nManager, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { LOGIN_ROUTE_NAME, PHONE_LOCAL_STORAGE_NAME, TAB_NAVIGATOR_ROUTE_NAME, SUCCESS } from './constants/constants';
import AppContainer from './routing/AppContainer';
import autoLoginRequest from './requests/AutoLoginRequest';

I18nManager.forceRTL(true);

export default function App() {
  const [fontReady, setFontReady] = useState(false);
  const [phoneNumberReady, setPhoneNumberReady] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [autoLogin, setAutoLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [initialRouteName, setInitialRouteName] = useState(LOGIN_ROUTE_NAME);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Heebo': require('./assets/fonts/Heebo/Heebo-Light.ttf'),
      'Heebo-Bold': require('./assets/fonts/Heebo/Heebo-Bold.ttf'),
      'Assistant': require('./assets/fonts/Assistant/Assistant-Light.ttf'),
      'Assistant-Bold': require('./assets/fonts/Assistant/Assistant-Bold.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    setFontReady(true);
  };

  const loadStoredPhoneNumber = async () => {
    const phoneNumber = await AsyncStorage.getItem(PHONE_LOCAL_STORAGE_NAME);
    setPhoneNumber(phoneNumber)
    setPhoneNumberReady(true);
  }

  const handleAutoLogin = async () => {
    if (phoneNumber !== undefined && phoneNumber !== null) {
      const autoLoginResponse = await autoLoginRequest(phoneNumber);

      console.log(autoLoginResponse);
      if (autoLoginResponse === SUCCESS) {
        setInitialRouteName(TAB_NAVIGATOR_ROUTE_NAME);
      } else {
        setInitialRouteName(LOGIN_ROUTE_NAME);
      }
    }

    setAutoLogin(false);
    setIsLoading(false);
  }

  if (isLoading) {
    if (!fontReady) {
      loadFonts();
    } else if (!phoneNumberReady) {
      console.log('loading phoneNumber from cache')
      loadStoredPhoneNumber();
    } else if (autoLogin) {
      handleAutoLogin();
    }

    return (
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottie}
          source={require('./assets/lottie/4966-onboarding-car.json')}
          autoPlay
          loop={true}
        />
      </View>
    );
  }

  return (
    <AppContainer initialRouteName={initialRouteName} />
  );
}

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
});