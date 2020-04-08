import { Card, Radio, View, CardItem } from 'native-base';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { HeeboText } from '../../components/HeeboText';
import RidesList from './RidesList';
import TypeOfUser from './TypeOfUser';


const styles = StyleSheet.create({
  statusCard: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    elevation: 0.001,
    backgroundColor: 'transparent',
    opacity: 0.75
  },
  cardItem: {
    paddingTop: 0,
    paddingBottom: 0,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginVertical: 3,
  },
});

const StatusPage = () => {
  const [isDriverSelected, setDriverSelected] = useState(false);


  const changeUserType = (isDriverSelected) => {
    console.log('a' + isDriverSelected);
    setDriverSelected(isDriverSelected);
  }

  return (
    <Card style={styles.statusCard}>
      <TypeOfUser isDriver={isDriverSelected} handleChange={changeUserType}/>
      <ScrollView>
        <RidesList isDriver={isDriverSelected}/>
      </ScrollView>
    </Card>
  );
};

export default StatusPage;




