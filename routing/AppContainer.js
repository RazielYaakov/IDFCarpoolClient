import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import RequestPage from '../views/findRide/FindRidePage';
import LoginPage from '../views/login/LoginPage';
import StatusPage from '../views/status/StatusPage';
import Header from './Header';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: '#eee' }} shifting={true}>
            <Tab.Screen name="חפש" component={RequestPage}
                options={{
                    tabBarIcon: () => (
                        <SimpleLineIcons size={24} name='magnifier' />
                    )
                }} />
            <Tab.Screen name="טרמפים" component={StatusPage}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons size={25} name='truck-delivery' />
                    )
                }} />
        </Tab.Navigator>
    );
}

export default function StackNavigator({ initialRouteName }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName}>
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="TabNavigator" component={TabNavigator}
                    options={{ headerTitle: () => (<Header />), headerTitleAlign: 'center', headerLeft: null }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}