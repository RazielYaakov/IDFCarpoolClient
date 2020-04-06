import { Body, Left, ListItem, Right } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { HeeboText } from '../../components/HeeboText';
import AcceptButton from './AcceptButton';
import CancelButton from './CancelButton';
import WaitingInfoButton from './WaitingInfoButton';

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
    marginRight: 10,
    paddingTop: 0,
  },
});

const RideRow = ({ }) => {
  return (
    <ListItem style={styles.container} avatar>
      <Right style={styles.rightSide}>
        <HeeboText style={styles.phoneNumber}>רזיאל יעקב</HeeboText>
        <HeeboText style={styles.phoneNumber}>0525217550</HeeboText>
      </Right>
      <Body style={styles.body}>
        <HeeboText style={styles.phoneNumber}>מאשקלון לצריפין</HeeboText>
        <HeeboText style={styles.phoneNumber}>24.6, 18:00</HeeboText>
      </Body>
      <Left style={styles.leftSide}>
        <AcceptButton handleAccept={acceptClick} />
        <CancelButton handleCancel={cancelClick}/>
      </Left>

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