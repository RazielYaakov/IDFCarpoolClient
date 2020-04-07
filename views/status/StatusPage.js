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
  return (
    <Card style={styles.statusCard}>
      <TypeOfUser />
      <ScrollView>
        <RidesList />
      </ScrollView>
    </Card>
  );
};

export default StatusPage;




