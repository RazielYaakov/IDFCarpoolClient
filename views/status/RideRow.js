import { Body, Left, ListItem, Right } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { HeeboText } from '../../components/HeeboText';
import AcceptButton from './AcceptButton';
import CancelButton from './CancelButton';
import WaitingInfoButton from './WaitingInfoButton';
import RideAcceptedButton from './RideAcceptedButton';

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

const RideRow = ({ name, phoneNumber, source, destination, date, driverAccepted, passengerAccepted, rideAccepted }) => {

  const getRoute = () => {
    return 'מ' + source + ' ל' + destination;
  }

  const getTimeAndDate = () => {
    var rideDate = new Date(date);
    var minutes = rideDate.getMinutes();
    minutes = minutes > 9 ? minutes : '0' + minutes;
    var time = rideDate.getHours() + ':' + minutes;
    var dayAndMonth = rideDate.getDate() + '/' + (rideDate.getMonth() + 1);
    return time + ',' + dayAndMonth;
  }

  const getRideStatusButtons = () => {
    if (!passengerAccepted) {
      return (
        <Left style={styles.leftSide}>
          <AcceptButton handleAccept={acceptClick} />
          <CancelButton handleCancel={cancelClick} />
        </Left>
      )
    } else if (!driverAccepted) {
      return (
        <Left style={styles.leftSide}>
          <WaitingInfoButton />
          <CancelButton handleCancel={cancelClick} />
        </Left>
      )
    } else if(!rideAccepted) {
      return (
        <Left style={styles.leftSide}>
          <RideAcceptedButton />
          <CancelButton handleCancel={cancelClick} />
        </Left>
      )
    } else {
      <Left style={styles.leftSide}>
          <CancelButton handleCancel={cancelClick} />
        </Left>
    }
  }

  return (
    <ListItem style={styles.container} avatar>
      <Right style={styles.rightSide}>
        <HeeboText style={styles.phoneNumber}>{name}</HeeboText>
        <HeeboText style={styles.phoneNumber}>{phoneNumber}</HeeboText>
      </Right>
      <Body style={styles.body}>
        <HeeboText style={styles.phoneNumber}>{getRoute()}</HeeboText>
        <HeeboText style={styles.phoneNumber}>{getTimeAndDate()}</HeeboText>
      </Body>
      {getRideStatusButtons()}
    </ListItem>
  );
};

const acceptClick = () => {
  alert('accept');
}

const cancelClick = () => {
  alert('cancel');
}

export default RideRow;