import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Row, Rows, Table } from 'react-native-table-component';

import showMyRidesRequest from '../../requests/showMyRidesRequest';

const styles = StyleSheet.create({
  Icon: {
    marginHorizontal: 20,
    color: '#4b4b4b',
  },
  wrapper: { flexDirection: 'row' },
  head: { height: 40, marginHorizontal: 10 },
  text: { textAlign: 'center', fontFamily: 'Heebo', fontSize: 15 },
  titleText: { textAlign: 'center', fontFamily: 'Heebo-Bold', fontSize: 17 },
  row: { height: 50, marginHorizontal: 10, borderTopWidth: 1 },
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
    <Table borderStyle={{ borderWidth: 0 }}>
      <Row data={tableTitles} flexArr={[1.5, 1.5, 1, 1.5]} style={styles.head} textStyle={styles.titleText} />
      <Rows data={tableData} flexArr={[1.5, 1.5, 1, 1.5]} textStyle={styles.text} />
    </Table>
  );
};

const fillTableData = (rides) => {
  var tableData = [];
  const valuesPosition = 1;
  var r = 0;

  rides.forEach(ride => {
    var values = ride[valuesPosition]
    tableData.push([values.passenger.name, values.passenger.phoneNumber, "data", values.accepted + ":"]);
  });

  return tableData;
}

export default RidesList;