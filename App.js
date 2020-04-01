import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import * as Font from 'expo-font';
import LoginPage from './components/loginPage';
import styled from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './views/home/HomePage';

const loadFonts = async (setFontReady) => {
  await Font.loadAsync({
    'Heebo': require('./assets/fonts/Heebo/Heebo-Light.ttf'),
    'Heebo-Bold': require('./assets/fonts/Heebo/Heebo-Bold.ttf'),
    'Assistant': require('./assets/fonts/Assistant/Assistant-Light.ttf'),
    'Assistant-Bold': require('./assets/fonts/Assistant/Assistant-Bold.ttf'),
  });
  setFontReady(true);
};

const Stack = createStackNavigator();

export default function App() {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    loadFonts(setFontReady);
  }, []);

  return (
      <>
        {!fontReady ? <Text>Loading... </Text> :
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={LoginPage}options={{title: 'הרשם'}}/>
              </Stack.Navigator>
            </NavigationContainer>
        }
      </>
  );

}

const RootView = styled(View)`
  font-family:'Assistant',serif;
  background-color: #fefefe;
  flex:1;
`;
