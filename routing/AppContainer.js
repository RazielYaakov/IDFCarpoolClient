import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import RequestPage from '../views/findRide/FindRidePage';
import LoginPage from '../views/login/LoginPage';
import StatusPage from '../views/status/StatusPage';
import Header from '../components/Header';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: '#eee' }} shifting={true}>
            <Tab.Screen name="טרמפ" component={RequestPage}
                options={{
                    tabBarIcon: () => (
                        <SimpleLineIcons size={25} name='magnifier-add' type={'SimpleLineIcons'} />
                    )
                }} />
            <Tab.Screen name="הנסיעות שלי" component={StatusPage}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons size={26} name='truck-delivery' />
                    )
                }} />
        </Tab.Navigator>
    );
}

export default function StackNavigator({ initialRouteName }) {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={initialRouteName} >
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }}/>
                <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}