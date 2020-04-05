import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Card } from 'native-base';
import { HeeboText } from '../../components/HeeboText';
import Constants from 'expo-constants';

export default function Header() {
    return (
        <Card style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageIDF} source={require('../../assets/images/idf-logo.png')} />
                <Image style={styles.imageIDF} source={require('../../assets/images/Icon.png')} />
                <Image style={styles.imageCar} source={require('../../assets/images/playstore.png')} />
            </View>
            <HeeboText style={styles.text}>IDF Carpool</HeeboText>
        </Card>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        marginTop: Constants.statusBarHeight,
        height: 48,
        borderRadius: 0,
        shadowRadius: 0,
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        borderTopWidth: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        width: '100%',
        padding: 0,
        opacity: 0.95,
    },
    imageCar: {
        height: 50,
        width: 50,
        backgroundColor: 'transparent'
    },
    imageIDF: {
        marginTop: 5,
        height: 40,
        width: 40,
        backgroundColor: 'transparent'
    },
    text: {
        fontSize: 25,
        marginRight: 15,
        marginTop: 7,
    },
    imageContainer: {
        flexDirection: 'row',
        marginLeft: 5,
    }
});