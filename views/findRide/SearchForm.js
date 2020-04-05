import moment from 'moment';
import { Button, Card, CardItem, CheckBox, Container, Icon, Radio } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';

import ControlledDateModal from '../../components/ControlledDateModal';
import ControlledPicker from '../../components/ControlledPicker';
import { HeeboText } from '../../components/HeeboText';
import { ALL_BASES, ALL_CITIES } from '../../constants/constants';
import RidesList from '../status/RidesList';

const MAX_DAYS_FROM_TODAY_A_RIDE_CAN_BE_ORDERED = 7;

const SearchForm = ({ submit, watch, control, errors }) => {
  const { register, setValue } = useForm();
  const [isDateVisible, setDateVisibility] = useState(false);
  const [isDriverSelected, setDriverSelected] = useState(false);
  const [isPermanentOffer, setPermanentOffer] = useState(false);

  const buttonText = () => {
    if (isDriverSelected) {
      return 'הצע טרמפ';
    }

    return 'בקש טרמפ';
  };

  const handleCheckBox = () => {
    if (isDriverSelected) {
      setPermanentOffer(!isPermanentOffer);
    } else {
      alert('רק נהג יכול להציע באופן קבוע');
    }
  };

  const handleRadio = (userType) => {
    if (userType == 'driver' && !isDriverSelected || userType == 'passenger' && isDriverSelected) {
      setDriverSelected(!isDriverSelected);
      if (!isDriverSelected) {
        setValue('userType', 'driver', true)
      } else {
        setValue('userType', 'passenger', true)
        setPermanentOffer(false);
      }
    }
  }

  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/search-back.jpg')}
        style={styles.backgroundImage}>

        <Card style={styles.userTypeCard}>
          <CardItem style={styles.userType}>
            <Radio selectedColor={'black'} ref={register({ name: 'userType' })} selected={!isDriverSelected} onPress={() => handleRadio('passenger')} />
            <HeeboText style={{ marginHorizontal: 10, fontSize: 17 }} isBold={true}>נוסע</HeeboText>
            <Radio selectedColor={'black'} ref={register({ name: 'userType' })} selected={isDriverSelected} onPress={() => handleRadio('driver')} />
            <HeeboText style={{ marginHorizontal: 10, fontSize: 17 }} isBold={true}>נהג</HeeboText>
          </CardItem>
          <CardItem style={styles.offerAlways}>
            <CheckBox checked={isPermanentOffer && isDriverSelected} color="green" onPress={() => handleCheckBox()} />
            <HeeboText style={{ marginLeft: 15 }} isBold={true}>הצע קבוע</HeeboText>
          </CardItem>
        </Card>

        <Card style={styles.cardStyle}>

          <View style={styles.rightSide}>
            <CardItem style={styles.locationItem}>
              <HeeboText style={styles.locationText} isBold={true}>מאיפה?</HeeboText>
              <ControlledPicker name="source" control={control}
                options={ALL_BASES} />
            </CardItem>
            <CardItem style={styles.locationItem}>
              <HeeboText style={styles.locationText} isBold={true}>לאן?</HeeboText>
              <ControlledPicker name="destination" control={control}
                options={ALL_CITIES} />
            </CardItem>
          </View>
          <View style={styles.dates}>
            <CardItem style={styles.itemStyle}>
              <Button iconRight dark transparent onPress={() => setDateVisibility(true)}>
                <HeeboText isBold={true} style={{ width: 69, fontSize: 17 }}>מתי?</HeeboText>
                <Icon name='calendar' />
              </Button>
            </CardItem>
            <Button style={styles.submitButton} onPress={submit} dark>
              <HeeboText isBold={true}>{buttonText()}</HeeboText>
            </Button>

            <ControlledDateModal
              control={control}
              name='date'
              mode='datetime'
              rules={{
                required: true,
                validate: date => date > new Date(),
              }}
              isVisible={isDateVisible}
              setVisibility={setDateVisibility}
              minimumDate={new Date()}
              maximumDate={new Date(moment().
                add(MAX_DAYS_FROM_TODAY_A_RIDE_CAN_BE_ORDERED, 'days'))}
            />
          </View>
        </Card>

        <Card style={styles.status}>
          <ScrollView>
            <RidesList style={styles.ridesStyle} />
          </ScrollView>
        </Card>
        
      </ImageBackground>
    </Container>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  userTypeCard: {
    justifyContent: 'space-around',
    width: '95%',
    height: '6%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    opacity: 0.8,
  },
  userType: {
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  offerAlways: {
    width: '50%',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  cardStyle: {
    width: '95%',
    height: '20%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    opacity: 0.8,
    marginTop: 5,
    flexDirection: 'row',
  },
  status: {
    width: '95%',
    height: '65%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    opacity: 0.8,
    marginTop: 3,
    flexDirection: 'row'
  },
  itemStyle: {
    backgroundColor: 'transparent',
  },
  dateStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    height: 40,
  },
  errorTextCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 15,
    color: 'red',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
  },
  rightSide: {
    height: '90%',
    width: '50%',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
  },
  dates: {
    height: '90%',
    width: '40%',
    backgroundColor: 'transparent',
    justifyContent: 'space-evenly',
  },
  locationItem: {
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
  },
  locationText: {
    width: 60,
    marginLeft: 35,
    marginRight: 15,
  },
  submitButton: {
    alignSelf: 'center',
    borderRadius: 20
  },

});