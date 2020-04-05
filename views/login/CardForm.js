import { Body, Button, Card, CardItem, Form, Icon, Input, Item, Label } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AsyncStorage, StyleSheet } from 'react-native';

import { HeeboText } from '../../components/HeeboText';
import { MAIN_PAGE_NAME, PHONE_LOCAL_STORAGE_NAME } from '../../constants/constants';
import pushNotificationRegister from '../../pushNotifications/pushNotificationRegister';

const CardForm = ({ navigation }) => {
  const { register, setValue, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    AsyncStorage.setItem(PHONE_LOCAL_STORAGE_NAME, data.phoneNumber);
    let token = await pushNotificationRegister();

    //send user data to server with token
    navigation.navigate(MAIN_PAGE_NAME);
  };

  return (
    <Card style={styles.cardStyle}>
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
    </Card>
  );
};

export default CardForm;

const styles = StyleSheet.create({
  cardStyle: {
    width: '80%',
    opacity: 0.9,
    height: '35%',
    marginBottom: 70,
    backgroundColor: 'transparent'
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