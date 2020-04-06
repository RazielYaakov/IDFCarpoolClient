import { Body, Button, Card, CardItem, Form, Icon, Input, Item, Label } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AsyncStorage, StyleSheet } from 'react-native';

import { HeeboText } from '../../components/HeeboText';
import { TAB_NAVIGATOR_ROUTE_NAME , PHONE_LOCAL_STORAGE_NAME } from '../../constants/constants';
import pushNotificationRegister from '../../pushNotifications/pushNotificationRegister';

const CardForm = ({ navigation }) => {
  const { register, setValue, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    AsyncStorage.setItem(PHONE_LOCAL_STORAGE_NAME, data.phoneNumber);
    let token = pushNotificationRegister();

    //send user data to server with token
    navigation.navigate(TAB_NAVIGATOR_ROUTE_NAME);
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
      <CardItem style={{ backgroundColor: 'transparent' }}>
        <Body>
          <Button iconRight block style={styles.loginButton}
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
    alignSelf: 'center',
    display: 'flex',
    borderColor: 'transparent',
    padding: 0,
    marginTop: 30,
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  cardForm: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  input: {
    textAlign: 'right',
    color: 'white'
  },
  label: {
    textAlign: 'left',
    color: 'white'
  },
  item: {
    textAlign: 'right',
    borderRadius: 0,
    borderWidth: 0,
    padding: 0,
    color: 'white'
  },
  loginButton: {
    padding: 0,
    width: '100%',
    alignSelf: 'center'
  },
  checkIcon: {
    color: 'white',
  }
});