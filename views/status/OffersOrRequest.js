import { CardItem, Radio } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { HeeboText } from '../../components/HeeboText';

const OffersOrRequest = ({ handleChange }) => {
    const [isOfferSelected, setOfferSelected] = useState(false);

    const handleRadio = (type) => {
        if (type == 'offers' && !isOfferSelected) {
            setOfferSelected(true);
            handleChange(true);
        } else if(type == 'requests' && isOfferSelected) {
            setOfferSelected(false);
            handleChange(false);
        }
    };

    return (
        <CardItem style={styles.cardItem}>
            <Radio color={'white'} selectedColor={'white'} selected={!isOfferSelected} onPress={() => handleRadio('requests')} />
            <HeeboText style={styles.textDesign} isBold={true}>מה ביקשו ממני</HeeboText>
            <Radio color={'white'} selectedColor={'white'} selected={isOfferSelected} onPress={() => handleRadio('offers')} />
            <HeeboText style={styles.textDesign} isBold={true}>מה הצעתי</HeeboText>
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
        opacity: 0.85
    },
    textDesign: {
        marginHorizontal: 5,
        fontSize: 17,
        color: 'white'
    }
});

export default OffersOrRequest;