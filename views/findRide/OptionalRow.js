import { Body, Left, ListItem, Right } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import passengerOfferAcceptRequest from '../../requests/PassengerOfferAcceptRequest';
import { HeeboText } from '../../components/HeeboText';
import AcceptButton from '../status/buttons/AcceptButton';
import {SUCCESS} from '../../constants/constants';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        elevation: 1,
        marginLeft: 0,
    },
    phoneNumber: {
        alignSelf: "flex-start",
    },
    viewRow: {
        flexDirection: 'row',
    },
    rightSide: {
        width: '33%',
        marginLeft: 9,
        marginRight: 0,
    },
    body: {
        flex: 1,
        width: '43%',
        marginRight: 0,
        marginLeft: 0,
    },
    leftSide: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
        marginRight: 5,
        paddingTop: 0,
    },
});

const OptionalRow = ({ offerData, offerID, phoneNumber }) => {

    const getRoute = () => {
        return 'מ' + offerData.source + ' ל' + offerData.destination;
    }

    const getTimeAndDate = () => {
        var rideDate = new Date(offerData.dateTime);

        var minutes = rideDate.getMinutes() > 9 ? rideDate.getMinutes() : ('0' + rideDate.getMinutes());
        var hours = rideDate.getHours() > 9 ? rideDate.getHours() : ('0' + rideDate.getHours());
        var time = hours + ':' + minutes;
        var day = rideDate.getDate() > 9 ? rideDate.getDate() : ('0' + rideDate.getDate());
        var month = (rideDate.getMonth() + 1) > 9 ? (rideDate.getMonth() + 1) : ('0' + (rideDate.getMonth() + 1));
        var date = day + '/' + month;

        return time + ',' + date;
    }

    const handleOfferAccept = async () => {
        var acceptOfferResponse = await passengerOfferAcceptRequest({ offerID, phoneNumber });

        if (acceptOfferResponse == SUCCESS) {
            Toast.showWithGravity('בקשה נשלחה לנהג!', Toast.LONG, Toast.CENTER);
            return;
        }
        
        Toast.showWithGravity('הייתה בעיה קטנה, תבקש שוב!', Toast.LONG, Toast.CENTER);
    };

    return (
        <ListItem style={styles.container} avatar>
            <Right style={styles.rightSide}>
                <HeeboText style={styles.phoneNumber}>{offerData.name}</HeeboText>
                <HeeboText style={styles.phoneNumber}>{offerData.phoneNumber}</HeeboText>
            </Right>
            <Body style={styles.body}>
                <HeeboText style={styles.phoneNumber}>{getRoute()}</HeeboText>
                <HeeboText style={styles.phoneNumber}>{getTimeAndDate()}</HeeboText>
            </Body>
            <Left style={styles.leftSide}>
                <AcceptButton handleAccept={handleOfferAccept} />
            </Left>
        </ListItem>
    );
};

export default OptionalRow;