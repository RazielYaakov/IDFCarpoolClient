import { Body, Left, ListItem, Right } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-simple-toast';

import { HeeboText } from '../../components/HeeboText';
import { FAILURE, SUCCESS } from '../../constants/constants';
import CancelOffer from '../../requests/CancelOfferRequest';
import CancelButton from './buttons/CancelButton';

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

const OfferRow = ({ offerData, offerID }) => {

    const getRoute = () => {
        return 'מ' + offerData.source + ' ל' + offerData.destination;
    }

    const getTimeAndDate = () => {
        var rideDate = new Date(offerData.dateTime);
        rideDate.setHours(rideDate.getHours() + (rideDate.getTimezoneOffset() / 60));

        var minutes = rideDate.getMinutes() > 9 ? rideDate.getMinutes() : ('0' + rideDate.getMinutes());
        var hours = rideDate.getHours() > 9 ? rideDate.getHours() : ('0' + rideDate.getHours());
        var time = hours + ':' + minutes;

        if (offerData.isPermanent === 'False') {
            var day = rideDate.getDate() > 9 ? rideDate.getDate() : ('0' + rideDate.getDate());
            var month = (rideDate.getMonth() + 1) > 9 ? (rideDate.getMonth() + 1) : ('0' + (rideDate.getMonth() + 1));
            var date = day + '/' + month;
            
            return time + ',' + date;
        }
        
        return 'כל יום ב-' + time;
    }

    const cancelOfferRequest = async () => {
        var cancelResponse = await CancelOffer({ offerID });

        if (cancelResponse == SUCCESS) {
            Toast.showWithGravity('ההצעה בוטלה!', Toast.LONG, Toast.CENTER);
        } else if (cancelResponse == FAILURE) {
            Toast.showWithGravity('הייתה בעיה קטנה, תבטל שוב', Toast.LONG, Toast.CENTER);
        }
    };

    return (
        <ListItem style={styles.container} avatar>
            <Right style={styles.rightSide}>
                <HeeboText style={styles.phoneNumber}>{getRoute()}</HeeboText>
            </Right>
            <Body style={styles.body}>
                <HeeboText style={styles.phoneNumber}>{getTimeAndDate()}</HeeboText>
            </Body>
            <Left style={styles.leftSide}>
                <CancelButton handleCancel={cancelOfferRequest} />
            </Left>
        </ListItem>
    );
};

export default OfferRow;