import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RequestPage from '../views/request/RequestPage';
import OfferPage from '../views/offer/OfferPage';
import StatusPage from '../views/status/StatusPage';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Request" component={RequestPage} options={{ title: 'בקש', }} />
            <Tab.Screen name="Offer" component={OfferPage} options={{ title: 'הצע' }} />
            <Tab.Screen name="Status" component={StatusPage} options={{ title: 'סטטוס' }} />
        </Tab.Navigator>
    )
};
