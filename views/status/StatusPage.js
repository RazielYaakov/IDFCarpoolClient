import React from 'react';
import { StyleSheet } from 'react-native';

import RidesList from './RidesList';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

const StatusPage = () => {

  return (
    <Card style={styles.status}>
      <ScrollView>
        <RidesList style={styles.ridesStyle} />
      </ScrollView>
    </Card>
  );
};


export default StatusPage;




