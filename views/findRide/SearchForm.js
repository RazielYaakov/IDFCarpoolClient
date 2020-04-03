import React, {useState} from 'react';
import {Card, CardItem, Container, Content} from 'native-base';
import {Button, StyleSheet, Text} from 'react-native';
import ControlledPicker from '../../components/ControlledPicker';
import ControlledDateModal from '../../components/ControlledDateModal';
import moment from 'moment';
import {ALL_BASES, ALL_CITIES} from '../../constants/constants';

const MAX_DAYS_FROM_TODAY_A_RIDE_CAN_BE_ORDERED = 14;

const SearchForm = ({submit, watch, control, errors}) => {
  const [isDateVisible, setDateVisibility] = useState(false);

  const getErrorMessage = () => {
    let message = null;

    if (errors?.date?.type === 'required') {
      message = 'לא הוכנס תאריך';
    }

    if (errors?.date?.type === 'validate') {
      message = 'התאריך חייב להיות עתידי';
    }

    return message
        ? <CardItem style={styles.errorTextCard}>
          <Text style={styles.errorText}>{message}</Text>
        </CardItem>
        : null;
  };

  return (
      <Content contentContainerStyle={styles.content}>
        <Card style={styles.cardStyle}>

          <CardItem style={styles.cardItem}>
            <Text style={styles.text}>בחר מיקום התחלתי</Text>
            <ControlledPicker name="origin" control={control}
                              options={ALL_BASES}/>
          </CardItem>

          <CardItem style={styles.cardItem}>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Text style={styles.text}>בחר יעד</Text>
            <ControlledPicker name="destination" control={control}
                              options={ALL_CITIES}/>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Button style={styles.button} title={watch('date') ?
                moment(watch('date')).format('DD MMMM YYYY') :
                'בחר תאריך'} onPress={() => setDateVisibility(true)}/>
            {getErrorMessage()}
          </CardItem>

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
          <CardItem style={styles.cardItemWithSubmit}>
            <Button title={'בקש טרמפ'} onPress={submit}/>
          </CardItem>
        </Card>
      </Content>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  cardStyle: {
    width: '80%',
  },
  cardItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
  },
  cardItemWithSubmit: {
    justifyContent: 'center',
    marginTop: '10%',
  },
  content: {
    flex: 1,
    backgroundColor: '#efefef',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTextCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 15,
    color: 'red',
  },
});