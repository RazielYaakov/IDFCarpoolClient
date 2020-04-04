import { Body, Button, Card, CardItem, Form, Icon, Input, Item, Label, ListItem, Radio } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AsyncStorage, ScrollView, StyleSheet } from 'react-native';

import { HeeboText } from '../../components/HeeboText';
import { PHONE_LOCAL_STORAGE_NAME } from '../../constants/constants';
import pushNotificationRegister from '../../pushNotifications/pushNotificationRegister';
import DriverSettings from './DriverSettings';

const CardForm = ({ navigation }) => {
  const { register, setValue, handleSubmit, errors } = useForm();
  const [isDriverSelected, setDriverSelected] = useState(false);

  const handleRadio = (userType) => {
    if (userType == 'driver' && !isDriverSelected || userType == 'passenger' && isDriverSelected) {
      setDriverSelected(!isDriverSelected);
      if(!isDriverSelected){
        setValue('userType', 'driver', true)
      } else {
        setValue('userType', 'passenger', true)
      }
    }
  }

  const onSubmit = data => {
    console.log(data);
    AsyncStorage.setItem(PHONE_LOCAL_STORAGE_NAME, data.phoneNumber);
    let token = pushNotificationRegister();

    //send user data to server wih token
    navigation.navigate('TabNavigator');
  };

  return (
    <Card style={styles.cardStyle}>
      <ScrollView>
        <CardItem style={styles.cardForm}>
          <Form style={styles.cardForm}>
            <Item floatingLabel>
              <Label style={styles.label}>שם מלא</Label>
              <Input style={styles.input} placeholder="שם מלא"
                ref={register({ name: 'name' }, { required: true })}
                onChangeText={text => setValue('name', text, true)} />
              {errors.name && <Icon style={styles.checkIcon} name='dislike2' type={'AntDesign'} />}
            </Item>
            <Item floatingLabel style={styles.item} last>
              <Label style={styles.label}>מספר טלפון</Label>
              <Input autoCompleteType={'tel'}
                keyboardType={'phone-pad'}
                dataDetectorTypes={'phoneNumber'}
                style={styles.input} placeholder="מספר טלפון"
                ref={register({ name: 'phoneNumber' },
                  { required: true, pattern: /^05\d{8}$/g })}
                onChangeText={text => setValue('phoneNumber', text,
                  true)} />
              {errors.phoneNumber &&
                <Icon style={styles.checkIcon} name='dislike2' type={'AntDesign'} />}
            </Item>
            <ListItem style={styles.userType}>
              <Radio ref={register({ name: 'userType' })} selected={!isDriverSelected} onPress={() => handleRadio('passenger')} />
              <HeeboText style={{ marginRight: 25, fontSize: 17 }}> נוסע</HeeboText>
              <Radio ref={register({ name: 'userType' })} selected={isDriverSelected} onPress={() => handleRadio('driver')} />
              <HeeboText style={{ fontSize: 17 }}> נהג</HeeboText>
            </ListItem>
            <DriverSettings />
          </Form>
        </CardItem>
        <CardItem>
          <Body>
            <Button iconRight block
              onPress={handleSubmit(onSubmit)}>
              <HeeboText>התחבר</HeeboText>
              <Icon name='arrow-forward' />
            </Button>
          </Body>
        </CardItem>
      </ScrollView>
    </Card>
  );
};

export default CardForm;

const styles = StyleSheet.create({
  cardStyle: {
    width: '80%',
    opacity: 0.7,
    height: '60%',
    marginBottom: 50,
  },
  cardForm: {
    width: '100%',
    position: 'relative',
  },
  input: {
    textAlign: 'right',
  },
  label: {
    textAlign: 'left',
  },
  item: {
    textAlign: 'right',
    marginBottom: 10,
  },
  checkIcon: {
    fontSize: 22,
    color: '#fe6b6b',
  },
  userType: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});