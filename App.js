import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { I18nManager } from 'react-native';
import TabNavigator from './routing/TabNavigator';
import HomePage from './views/home/HomePage';

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

const Stack = createStackNavigator();

export default function App() {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    loadFonts(setFontReady);
  }, []);

  if (!fontReady) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
