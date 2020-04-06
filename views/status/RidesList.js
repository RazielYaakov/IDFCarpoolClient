import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { List } from 'native-base';
import { Row, Rows, Table } from 'react-native-table-component';

import showMyRidesRequest from '../../requests/showMyRidesRequest';
import CancelButton from './CancelButton';
import InfoButton from './InfoButton';

const styles = StyleSheet.create({
  lottie: {
    width: 250,
    height: 250,
  },
  lottieContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1
  },
});

const FAKE_TELEPHONE = "1";

const RidesList = () => {
  const tableTitles = ['שם', 'טלפון', 'מידע', 'סטטוס'];
  const [isLoading, setIsLoading] = useState(true);
  const [myRides, setRides] = useState(undefined);
  const [tableData, setTableData] = useState(undefined);

  const getUserRides = async ({ userType, phoneNumber }) => {
    const myRides = await showMyRidesRequest({ userType, phoneNumber });
    setIsLoading(false);
    setRides(myRides.data);
    setTableData(fillTableData(myRides));
  };

  if (isLoading) {
    getUserRides({ "userType": "passenger", "phoneNumber": "1" });

    return (
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottie}
          source={require('../../assets/lottie/4966-onboarding-car.json')}
          autoPlay
          loop={true}
        />
      </View>
    );
  }

  return (
    <List>
    </List>
  );
};

const fillTableData = (rides) => {
  var tableData = [];
  const valuesPosition = 1;

  rides.forEach(ride => {
    var values = ride[valuesPosition]
    tableData.push([values.passenger.name, values.passenger.phoneNumber, <InfoButton ride={values} />, <CancelButton handleCancel={cancelClick} />]);
  });

  console.log(tableData);
  return tableData;
}

const acceptClick = () => {
  alert('accept');
}

const cancelClick = () => {
  alert('cancel');
}

export default RidesList;