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
});

const HeaderIcon = () => {
  return (
      <View style={styles.iconWarpper}>
        <Image
            style={styles.tinyLogo}
            source={require('../../assets/images/Icon.png')}
        />
        <StyledHeader isBold={true}>הכביש הזה מתחיל כאן
        </StyledHeader>
      </View>
  );
};

export default HeaderIcon;

const StyledHeader = styled(HeeboText)`
  margin-top: 20px;
  font-size: 30px;
  margin-bottom: 40px;
  font-weight: bold;
  color: #d9d9d9;
`;