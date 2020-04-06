import moment from 'moment';
import { Button, Card, CardItem, CheckBox, Container, Icon, Radio } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImageBackground, StyleSheet } from 'react-native';

import ControlledDateModal from '../../components/ControlledDateModal';
import ControlledPicker from '../../components/ControlledPicker';
import { HeeboText } from '../../components/HeeboText';
import { ALL_BASES, ALL_CITIES } from '../../constants/constants';

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

  const showAlwaysOffer = () => {
    if (isDriverSelected) {
      return (
        <CardItem style={styles.cardItem}>
          <CheckBox checked={isPermanentOffer && isDriverSelected} color="green" onPress={() => handleCheckBox()} />
          <HeeboText style={{ marginLeft: 15 }} isBold={true}>הצע באופן קבוע</HeeboText>
        </CardItem>
      );
    }
  }

  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/search-back.jpg')}
        style={styles.backgroundImage}>
        <Card style={styles.userTypeCard}>
          <CardItem style={styles.cardItem}>
            <Radio selectedColor={'black'} ref={register({ name: 'userType' })} selected={!isDriverSelected} onPress={() => handleRadio('passenger')} />
            <HeeboText style={{ marginHorizontal: 10, fontSize: 17 }} isBold={true}>נוסע</HeeboText>
            <Radio selectedColor={'black'} ref={register({ name: 'userType' })} selected={isDriverSelected} onPress={() => handleRadio('driver')} />
            <HeeboText style={{ marginHorizontal: 10, fontSize: 17 }} isBold={true}>נהג</HeeboText>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <HeeboText style={styles.locationText} isBold={true}>מאיפה?</HeeboText>
            <ControlledPicker name="source" control={control}
              options={ALL_BASES} />
          </CardItem>
          <CardItem style={styles.cardItem}>
            <HeeboText style={styles.locationText} isBold={true}>לאן?</HeeboText>
            <ControlledPicker name="destination" control={control}
              options={ALL_CITIES} />
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Button iconRight dark transparent onPress={() => setDateVisibility(true)}>
              <HeeboText isBold={true} style={{ width: 69, fontSize: 17 }}>מתי?</HeeboText>
              <Icon name='calendar' type={'FontAwesome'} />
            </Button>
          </CardItem>
          <Button style={styles.submitButton} onPress={submit} success>
            <HeeboText isBold={true}>{buttonText()}</HeeboText>
          </Button>
          {showAlwaysOffer()}

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
        </Card>
      </ImageBackground>
    </Container>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  userTypeCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '55%',
    marginTop: 10,
    opacity: 0.8,
    borderRadius: 10,
  },
  cardItem: {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: 'transparent',
    marginVertical: 3,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
});