
import * as React from 'react';
import RequestPage from '../views/findRide/FindRidePage';
import LoginPage from '../views/login/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header'

const Stack = createStackNavigator();

export default function StackNavigator({ initialRouteName }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={RequestPage}
                    options={{ headerTitle: ()=>(<Header/>), headerTitleAlign: 'center', headerLeft: null }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}