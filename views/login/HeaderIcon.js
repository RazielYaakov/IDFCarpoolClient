import React, {useRef} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {HeeboText} from '../../components/HeeboText';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 95,
    height: 95,
    marginHorizontal:10
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  lottie: {
    height: 140,
  },
  header:{
    fontSize:20,
    marginBottom:40,
    marginTop:5,
    color:"#ffffff"
  },
  name:{
    fontSize:50,
    fontWeight: 'bold',
    marginTop:40,
    color:"#ffffff"
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
        <HeeboText style={styles.header}>הכביש הזה מתחיל כאן
        </HeeboText>
      </View>
  );
};

export default HeaderIcon;

