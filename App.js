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

I18nManager.forceRTL(true);

export default function App() {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    loadFonts(setFontReady);
  }, []);

  if (!fontReady) {
    return <AppLoading />;
  }

  return (
    <AppContainer/>
  );
}
