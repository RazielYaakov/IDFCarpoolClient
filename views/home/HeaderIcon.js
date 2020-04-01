import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import styled from 'styled-components';
import {HeeboText} from '../../components/HeeboText';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 200,
  },
  iconWarpper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header:{
    fontSize:20,
    marginBottom:40,
    marginTop:5,
    color:"#d9d9d9"
  },
  name:{
    fontSize:30,
    fontWeight: 'bold',
    marginTop:20,
    color:"#d9d9d9"
  }
});

const HeaderIcon = () => {
  return (
      <View style={styles.iconWarpper}>
        <Image
            style={styles.tinyLogo}
            source={require('../../assets/images/Icon.png')}
        />
        <HeeboText style={styles.name} isBold={true}> IDF Carpool</HeeboText>
        <HeeboText style={styles.header}>הכביש הזה מתחיל כאן
        </HeeboText>
      </View>
  );
};

export default HeaderIcon;

