import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import styled from 'styled-components';
import { HeeboText } from '../../components/HeeboText';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
    marginHorizontal: 5
  },
  iconWarpper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logos: {
    flexDirection: 'row',
    marginBottom: 70
  },
  header: {
    fontSize: 20,
    marginBottom: 40,
    marginTop: 5,
    color: "#08111A"
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    color: "#08111A"
  },
});

const HeaderIcon = () => {
  return (
    <View style={styles.iconWarpper}>
      <View style={styles.logos}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/idf-logo.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/ride.gif')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/Icon.png')}
        />
      </View>
    </View>
  );
};

export default HeaderIcon;

