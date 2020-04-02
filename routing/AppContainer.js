import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import RequestPage from '../views/findRide/FindRidePage';
import StatusPage from '../views/status/StatusPage';
import { MaterialCommunityIcons, SimpleLineIcons,Ionicon,MaterialIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from '../views/login/LoginPage';
import SettingsPage from '../views/settings/settingsPage';

const TabNavigator = createMaterialBottomTabNavigator({
    Request: {
        screen: RequestPage,
        navigationOptions: {
            tabBarLabel: 'חפש',
            tabBarIcon: ({ tintColor }) => (
                <SimpleLineIcons color={tintColor} size={24} name='magnifier' />
            )
        }
    },
    Status: {
        screen: StatusPage,
        navigationOptions: {
            tabBarLabel: 'סטטוס',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons color={tintColor} size={28} name='playlist-edit'/>
            )
        }
    },
    Settings:{
        screen: SettingsPage,
        navigationOptions: {
            tabBarLabel: 'הגדרות',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons color={tintColor} size={26} name='settings'/>
            )
        }
    }
},
    {
        initialRouteName: 'Request',
        barStyle: {
            backgroundColor: '#eee'
        }
    }
);

const StackNavigator = createStackNavigator({
    Login: {
        screen: LoginPage,
        navigationOptions:{
            headerTitle:"IDF Carpool",
            headerTitleAlign: "center",
        }
    },
    TabNavigator:{
        screen: TabNavigator,
        navigationOptions:{
            headerTitle:"IDF Carpool",
            headerTitleAlign: "center",
            headerLeft: ()=>(<></>)
        }
    },
})

export default createAppContainer(StackNavigator)
