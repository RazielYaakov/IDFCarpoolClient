import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { HeeboText } from '../../components/HeeboText';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 95,
    height: 95,
    marginHorizontal: 5
  },
  headerWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  lottie: {
    height: 120,
  },
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#ffffff",
  }
});

const HeaderIcon = () => {
  const lottie = useRef(null);
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.iconWrapper}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/idf-logo.png')}
        />
        <View>
          <LottieView
            ref={lottie}
            style={styles.lottie}
            source={require('../../assets/lottie/3657-small-car.json')}
            autoPlay
            loop={true}
          />
        </View>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/Icon.png')}
        />
      </View>
      <HeeboText style={styles.name} isBold={true}> IDF Carpool</HeeboText>
    </View>

  );
};

export default HeaderIcon;

