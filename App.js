import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import AppContainer from './routing/AppContainer';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { I18nManager } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const loadFonts = async (setFontReady) => {
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

const loadStoredPhoneNumber = async (setPhoneNumberReady, setInitialRouteName) => {
    const phoneNumber = await AsyncStorage.getItem(PHONE_LOCAL_STORAGE_NAME);

    if(phoneNumber) {
        setInitialRouteName(TAB_NAVIGATOR_ROUTE_NAME);
    }

    setPhoneNumberReady(true);
}

I18nManager.forceRTL(true);

export default function App() {
  const [fontReady, setFontReady] = useState(false);
  const [phoneNumberReady, setPhoneNumberReady] = useState(false);
  const [initialRouteName, setInitialRouteName] = useState(HOME_ROUTE_NAME);

  useEffect(() => {
    loadFonts(setFontReady);
    loadStoredPhoneNumber(setPhoneNumberReady, setInitialRouteName);
  }, []);

  if (!(fontReady && phoneNumberReady)) {
    return <AppLoading />;
  }

  return (
    <AppContainer/>
  );
}
