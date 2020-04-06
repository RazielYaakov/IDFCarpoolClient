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
    justifyContent: 'flex-start',
    flex: 1,
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  lottie: {
    height: 100,
  },
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#ffffff",
  },
  text: {
    fontSize: 20,
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
            source={require('../../assets/lottie/4966-onboarding-car.json')}
            autoPlay
            loop={true}
          />
        </View>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/Icon.png')}
        />
      </View>
      <HeeboText style={styles.name} isBold={true}>IDF Carpool</HeeboText>
      <HeeboText style={styles.text}>הכביש הזה מתחיל כאן</HeeboText>
    </View>

  );
};

export default HeaderIcon;

