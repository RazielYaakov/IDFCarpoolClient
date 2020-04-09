import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { HeeboText } from './HeeboText';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageIDF} source={require('../assets/images/idf-logo.png')} />
                <Image style={styles.imageIDF} source={require('../assets/images/Icon.png')} />
                <Image style={styles.imageCar} source={require('../assets/images/playstore.png')} />
            </View>
            <HeeboText style={styles.text}>IDF Carpool</HeeboText>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        width: '100%',
        height: '8%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        opacity: 0.9,
        elevation: 0.001,
    },
    imageCar: {
        height: 45,
        width: 40,
        marginLeft: 5,
    },
    imageIDF: {
        height: 40,
        width: 40,
        marginTop: 5,
    },
    text: {
        fontSize: 25,
        marginHorizontal: 8,
        backgroundColor: 'transparent',
    },
    imageContainer: {
        flexDirection: 'row',
        marginHorizontal: 8,
        backgroundColor: 'transparent',
    }
});