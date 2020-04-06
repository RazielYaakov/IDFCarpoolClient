import { Card } from 'native-base';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import RidesList from './RidesList';
import RideRow from './RideRow';


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
});

const StatusPage = () => {

  return (
    <Card style={styles.statusCard}>
      <ScrollView>
        <RideRow />
        <RideRow />
        <RideRow />
        <RideRow />
        <RideRow />
        <RideRow />
        <RideRow />
        <RideRow />
        <RideRow />
        <RidesList />
      </ScrollView>
    </Card>
  );
};


export default StatusPage;




