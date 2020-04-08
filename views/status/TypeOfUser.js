import { CardItem, Radio } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { HeeboText } from '../../components/HeeboText';

const TypeOfUser = ({handleChange, isDriver}) => {
    const [isDriverSelected, setDriverSelected] = useState(false);

    const handleRadio = (userType) => {
        if (userType == 'driver' && !isDriverSelected || userType == 'passenger' && isDriverSelected) {
            setDriverSelected(!isDriverSelected);
            handleChange(isDriverSelected);
        }
    };

    return (
        <CardItem style={styles.cardItem}>
            <HeeboText style={styles.textDesign} isBold={true}>הצג לי טרמפים בתור</HeeboText>
            <Radio color={'white'} selectedColor={'white'} selected={!isDriverSelected} onPress={() => handleRadio('passenger')} />
            <HeeboText style={styles.textDesign} isBold={true}>נוסע</HeeboText>
            <Radio color={'white'} selectedColor={'white'} selected={isDriverSelected} onPress={() => handleRadio('driver')} />
            <HeeboText style={styles.textDesign} isBold={true}>נהג</HeeboText>
        </CardItem>
    )
}

const styles = StyleSheet.create({
    cardItem: {
        elevation: 0,
        height: 30,
        paddingTop: 0,
        paddingBottom: 0,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    textDesign: {
        marginHorizontal: 5,
        fontSize: 17,
        color: 'white'
    }
});

export default TypeOfUser;