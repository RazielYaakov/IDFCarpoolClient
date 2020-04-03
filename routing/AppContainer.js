
import * as React from 'react';
import RequestPage from '../views/findRide/FindRidePage';
import StatusPage from '../views/status/StatusPage';
import { MaterialCommunityIcons, SimpleLineIcons, Ionicon, MaterialIcons } from '@expo/vector-icons';
import LoginPage from '../views/login/LoginPage';
import SettingsPage from '../views/settings/settingsPage';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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
            <Tab.Screen name="נסיעות" component={StatusPage} 
            options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons size={25} name='truck-delivery'/>
                )
            }} />
            <Tab.Screen name="הגדרות" component={SettingsPage} 
            options={{
                tabBarIcon: () => (
                    <MaterialIcons size={26} name='settings'/>
                )
            }}/>
        </Tab.Navigator>
    );
}

export default function StackNavigator({ initialRouteName }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName}>
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="TabNavigator" component={TabNavigator}
                    options={{ headerTitle: 'IDF Carpool', headerTitleAlign: 'center', headerLeft: null }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}