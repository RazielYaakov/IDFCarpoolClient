
import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { HeeboText } from '../components/HeeboText'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageIDF} source={require('../assets/images/idf-logo.png')} />
                <Image style={styles.imageIDF} source={require('../assets/images/Icon.png')} />
                <Image style={styles.imageCar} source={require('../assets/images/playstore.png')} />
            </View>
            <HeeboText style={styles.text} isBold={true}>IDF Carpool</HeeboText>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingBottom: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageCar: {
        height: 50,
        width: 50,
        marginHorizontal: 5,
    },
    imageIDF: {
        marginTop: 5,
        height: 40,
        width: 40,
        marginHorizontal: 5,
    },
    text: {
        fontSize: 30,
        marginRight: 15,
    },
    imageContainer: {
        flexDirection: 'row',
        marginLeft: 10,
    }
});