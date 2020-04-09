import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Card } from 'native-base';
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
        width: '100%',
        height: 55,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#eee',
        opacity: 0.95,
        marginTop: 20,
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
        marginLeft: 5,
    },
    text: {
        fontSize: 25,
        marginRight: 30,
        backgroundColor: 'transparent',
        
    },
    imageContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginLeft: 30,
    }
});