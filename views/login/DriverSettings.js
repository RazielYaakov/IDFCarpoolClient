import React from 'react';
import { View } from 'react-native';
import BaseSettings from './BaseSettings';
import HomeSettings from './HomeSettings';

const DriverSettings = () => {
    return (
        <View>
            <HomeSettings />
            <BaseSettings />
        </View>
    )
};

export default DriverSettings;