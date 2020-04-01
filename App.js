import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {AppLoading} from 'expo';
import LoginPage from './components/loginPage';
import styled from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './views/home/HomePage';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import { I18nManager } from 'react-native';
import FindRidePage from './views/findRide/FindRidePage';


const loadFonts = async (setFontReady) => {
  await Font.loadAsync({
    'Heebo': require('./assets/fonts/Heebo/Heebo-Light.ttf'),
    'Heebo-Bold': require('./assets/fonts/Heebo/Heebo-Bold.ttf'),
    'Assitant': require('./assets/fonts/Assistant/Assistant-Light.ttf'),
    'Assitant-Bold': require('./assets/fonts/Assistant/Assistant-Bold.ttf'),
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
    return <AppLoading/>;
  }

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage}
                        options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={LoginPage}
                        options={{title: 'הרשם'}}/>
          <Stack.Screen name="FindRide" component={FindRidePage}/>
        </Stack.Navigator>
      </NavigationContainer>
  );

}

const RootView = styled(View)`
  font-family:'Assistant',serif;
  background-color: #fefefe;
  flex:1;
`;
