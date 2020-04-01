import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RequestPage from '../views/findRide/FindRidePage';
import OfferPage from '../views/offer/OfferPage';
import StatusPage from '../views/status/statusPage';
import SettingsPage from '../views/settings/settingsPage';
import { Icon } from 'native-base';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator style={styles.navigator}>
            <Tab.Screen name="Request" component={RequestPage} options={{ title: 'בקש טרמפ', }} />
            <Tab.Screen name="Offer" component={OfferPage} options={{ title: 'הצע טרמפ' }} />
            <Tab.Screen name="Status" component={StatusPage} options={{ title: 'סטטוס טרמפים' }} />
            <Tab.Screen name="Settings" component={SettingsPage} options={{ title: 'הגדרות' }}/>
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    navigator: { marginTop: 25 },
});