import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import styled from 'styled-components';
import { HebboText } from '../../components/text/HebboText';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
  iconWarpper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginBottom: 40,
    marginTop: 5,
    color: "#d9d9d9"
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    color: "#d9d9d9"
  }
});

const HeaderIcon = () => {
  return (
    <View style={styles.iconWarpper}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/images/Icon.png')}
      />
      <HebboText style={styles.name} isBold={true}> IDF Carpool</HebboText>
      <HebboText style={styles.header}>הכביש הזה מתחיל כאן
        </HebboText>
    </View>
  );
};

export default HeaderIcon;
