import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Card } from 'native-base';
import { HeeboText } from '../components/HeeboText';

export default function Header() {
    return (
        <Card style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageIDF} source={require('../assets/images/idf-logo.png')} />
                <Image style={styles.imageIDF} source={require('../assets/images/Icon.png')} />
                <Image style={styles.imageCar} source={require('../assets/images/playstore.png')} />
            </View>
            <HeeboText style={styles.text}>IDF Carpool</HeeboText>
        </Card>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 55,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        opacity: 0.95,
        marginTop: 0,
        marginBottom: 0,
        elevation: 0.001,
        flex:1,
    },
    imageCar: {
        height: 45,
        width: 40,
        marginLeft: 2,
    },
    imageIDF: {
        height: 40,
        width: 40,
        marginTop: 5,
    },
    text: {
        fontSize: 25,
        marginRight: 15,
        backgroundColor: 'transparent',
        
    },
    imageContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginLeft: 10,
    }
});