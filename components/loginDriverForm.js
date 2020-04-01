import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {LoginFormStyles} from '../styles/loginFormStyles'

export default function LoginDriverForm({ handleChange, handleBlur, values }) {
    return (
        <View>
            <Text style={LoginFormStyles.text}>שעת יציאה מהבית</Text>
            <TextInput
                style={LoginFormStyles.textInput}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
            />
            <Text style={LoginFormStyles.text}>שעת יציאה מהבסיס</Text>
            <TextInput
                style={LoginFormStyles.textInput}
                onChangeText={handleChange('departureHomeTime')}
                onBlur={handleBlur('departureHomeTime')}
                value={values.departureHomeTime}
            />
            <Text style={LoginFormStyles.text}>מספר מקומות פנויים</Text>
            <TextInput
                style={LoginFormStyles.textInput}
                onChangeText={handleChange('departureBaseTime')}
                onBlur={handleBlur('departureBaseTime')}
                value={values.departureBaseTime}
                keyboardType='numeric'
            />
        </View>
    );
}

const styles = StyleSheet.create({
   
});
