import moment from 'moment';
import { Button, Card, CardItem, Container, Icon } from 'native-base';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';

import ControlledDateModal from '../../components/ControlledDateModal';
import ControlledPicker from '../../components/ControlledPicker';
import { HeeboText } from '../../components/HeeboText';
import { ALL_BASES, ALL_CITIES } from '../../constants/constants';
import RidesList from '../status/RidesList';

const MAX_DAYS_FROM_TODAY_A_RIDE_CAN_BE_ORDERED = 14;

const SearchForm = ({ submit, watch, control, errors }) => {
  const [isDateVisible, setDateVisibility] = useState(false);

  const getErrorMessage = () => {
    let message = null;

    if (errors?.date?.type === 'required') {
      message = 'לא הוכנס תאריך';
      alert(message);
    }

    if (errors?.date?.type === 'validate') {
      message = 'התאריך חייב להיות עתידי';
      alert(message);
    }


    return message
      ? <CardItem style={styles.errorTextCard}>
        <HeeboText style={styles.errorText}>{message}</HeeboText>
      </CardItem>
      : null;
  };

  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/search-back.jpg')}
        style={styles.backgroundImage}>
        <Card style={styles.cardStyle}>

          <View style={styles.locations}>
            <CardItem style={styles.locationItem}>
              <HeeboText isBold={true}>מאיפה?</HeeboText>
              <ControlledPicker name="source" control={control}
                options={ALL_BASES} />
            </CardItem>
            <CardItem style={styles.locationItem}>
              <HeeboText isBold={true}>לאן?</HeeboText>
              <ControlledPicker name="destination" control={control}
                options={ALL_CITIES} />
            </CardItem>
          </View>
          <View style={styles.dates}>
            <CardItem style={styles.itemStyle}>
              <Button iconRight dark transparent onPress={() => setDateVisibility(true)}>
                <HeeboText isBold={true} style={{ fontSize: 17 }}>מתי?</HeeboText>
                <Icon name='calendar' />
              </Button>
            </CardItem>
            <Button style={styles.submitButton} onPress={submit} dark>
              <HeeboText isBold={true}>בקש טרמפ</HeeboText>
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
  cardStyle: {
    width: '95%',
    height: '23%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    opacity: 0.8,
    marginTop: 10,
    flexDirection: 'row'
  },
  status: {
    width: '95%',
    height: '72%',
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
  locations: {
    height: '90%',
    width: '60%',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
  },
  dates: {
    height: '90%',
    width: '40%',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginRight: 10

  },
  locationItem: {
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent',
  },
  submitButton: {
    alignSelf: 'center',
  }
});