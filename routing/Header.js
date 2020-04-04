
import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {HeeboText} from '../components/HeeboText'

export default function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/images/idf-logo.png')}/>
            <Image style={styles.image} source={require('../assets/images/Icon.png')} />
            <HeeboText  style={styles.text} isBold={true}>IDF Carpool</HeeboText>

        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    image:{
        height:45,
        width:45,
    },
    text:{
        fontSize: 30,
        marginHorizontal: 20,
    }
});