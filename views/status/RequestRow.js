import { Body, Left, ListItem, Right } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { HeeboText } from '../../components/HeeboText';
import AcceptButton from './buttons/AcceptButton';
import CancelButton from './buttons/CancelButton';
import WaitingInfoButton from './buttons/WaitingInfoButton';
import RideAcceptedButton from './buttons/RideAcceptedButton';
import DriverAcceptRequest from '../../requests/DriverAcceptRequest';
import PassengerHandshakeRequest from '../../requests/PassengerHandshakeRequest';
import CancelRequest from '../../requests/cancelRideRequest';
import Toast from 'react-native-simple-toast';
import { SUCCESS, FAILURE } from '../../constants/constants';

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

const RequestRow = ({ requestData, requestID, isDriver, phoneNumber }) => {

  const getRoute = () => {
    return 'מ' + requestData.source + ' ל' + requestData.destination;
  }

  const getTimeAndDate = () => {
    var rideDate = new Date(requestData.dateTime);
    rideDate.setHours(rideDate.getHours() + (rideDate.getTimezoneOffset() / 60));

    var minutes = rideDate.getMinutes() > 9 ? rideDate.getMinutes() : ('0' + rideDate.getMinutes());
    var hours = rideDate.getHours() > 9 ? rideDate.getHours() : ('0' + rideDate.getHours());
    var time = hours + ':' + minutes;
    var day = rideDate.getDate() > 9 ? rideDate.getDate() : ('0' + rideDate.getDate());
    var month = (rideDate.getMonth() + 1) > 9 ? (rideDate.getMonth() + 1) : ('0' + (rideDate.getMonth() + 1));
    var date = day + '/' + month;

    return time + ',' + date;
  }

  const getDriverStatusButtons = () => {
    if (!requestData.driver.accepted) {
      return (
        <Left style={styles.leftSide}>
          <AcceptButton handleAccept={driverAcceptRequest} />
          <CancelButton handleCancel={cancelRideRequest} />
        </Left>
      )
    } else if (!requestData.accepted) {
      return (
        <Left style={styles.leftSide}>
          <WaitingInfoButton isDriver={isDriver} />
          <CancelButton handleCancel={cancelRideRequest} />
        </Left>
      )
    } else {
      return (
        <Left style={styles.leftSide}>
          <CancelButton handleCancel={cancelRideRequest} />
        </Left>
      )
    }
  }

  const getPassengerStatusButtons = () => {
    if (!requestData.driver.accepted) {
      return (
        <Left style={styles.leftSide}>
          <WaitingInfoButton isDriver={isDriver} />
          <CancelButton handleCancel={cancelRideRequest} />
        </Left>
      )
    } else if (requestData.driver.accepted && !requestData.accepted) {
      return (
        <Left style={styles.leftSide}>
          <RideAcceptedButton handleAccept={passengerHandshake} />
          <CancelButton handleCancel={cancelRideRequest} />
        </Left>
      )
    } else {
      return (
        <Left style={styles.leftSide}>
          <CancelButton handleCancel={cancelRideRequest} />
        </Left>
      )
    }
  }

  const driverAcceptRequest = async () => {
    var driverAcceptResponse = await DriverAcceptRequest({ requestID });

    if (driverAcceptResponse == SUCCESS) {
      Toast.showWithGravity('האישור נשלח לנוסע!', Toast.LONG, Toast.CENTER);
      return;
    } else if (driverAcceptRequest == FAILURE) {
      Toast.showWithGravity('הייתה בעיה קטנה, תאשר שוב בבקשה', Toast.LONG, Toast.CENTER);
    }
  }

  const passengerHandshake = async () => {
    var handshakeResponse = await PassengerHandshakeRequest({ requestID });

    if (handshakeResponse == SUCCESS) {
      Toast.showWithGravity('הטרמפ אושר!', Toast.LONG, Toast.CENTER);
    } else if (handshakeResponse == FAILURE) {
      Toast.showWithGravity('הייתה בעיה קטנה, תאשר שוב בבקשה', Toast.LONG, Toast.CENTER);
    }
  }

  const cancelRideRequest = async () => {
    var cancelResponse = await CancelRequest({ requestID, phoneNumber });

    if (cancelResponse == SUCCESS) {
      Toast.showWithGravity('הטרמפ בוטל!', Toast.LONG, Toast.CENTER);
    } else if (cancelResponse == FAILURE) {
      Toast.showWithGravity('הייתה בעיה קטנה, תבטל שוב', Toast.LONG, Toast.CENTER);
    }
  }

  return (
    <ListItem style={styles.container} avatar>
      <Right style={styles.rightSide}>
        <HeeboText style={styles.phoneNumber}>{isDriver ? requestData.passenger.name : requestData.driver.name}</HeeboText>
        <HeeboText style={styles.phoneNumber}>{isDriver ? requestData.passenger.phoneNumber : requestData.driver.phoneNumber}</HeeboText>
      </Right>
      <Body style={styles.body}>
        <HeeboText style={styles.phoneNumber}>{getRoute()}</HeeboText>
        <HeeboText style={styles.phoneNumber}>{getTimeAndDate()}</HeeboText>
      </Body>
      {isDriver ? getDriverStatusButtons() : getPassengerStatusButtons()}
    </ListItem>
  );
};

export default RequestRow;