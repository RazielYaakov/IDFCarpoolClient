import { Body, Button, Card, CardItem, Form, Icon, Input, Item, Label } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AsyncStorage, StyleSheet } from 'react-native';
import loginRequest from '../../requests/loginRequest';
import { HeeboText } from '../../components/HeeboText';
import { SUCCESS, TAB_NAVIGATOR_ROUTE_NAME, PHONE_LOCAL_STORAGE_NAME, USERNAME_LOCAL_STORAGE_NAME, TOKEN_LOCAL_STORAGE_NAME } from '../../constants/constants';
import pushNotificationRegister from '../../pushNotifications/pushNotificationRegister';
import Toast from 'react-native-simple-toast';

const CardForm = ({ navigation }) => {
  const { register, setValue, handleSubmit, errors } = useForm();
  const [isLoginSucceed, setLoginSucceed] = useState(false);
  const onlyHebrewPattern = new RegExp(/^[\u0590-\u05FF '-]+$/i);
  const phoneNumberPattern = new RegExp(/^05\d{8}$/g);

  const onSubmit = async (data) => {
    if (dataIsValid(data)) {
      let token = await pushNotificationRegister();

      AsyncStorage.setItem(PHONE_LOCAL_STORAGE_NAME, data.phoneNumber);
      AsyncStorage.setItem(USERNAME_LOCAL_STORAGE_NAME, data.name);
      AsyncStorage.setItem(TOKEN_LOCAL_STORAGE_NAME, token);

      //send user data to server with token
      var loginRequestResponse = await loginRequest({
        phoneNumber: data.phoneNumber,
        name: data.name,
        token: token
      });

      if (loginRequestResponse === SUCCESS) {
        navigation.navigate(TAB_NAVIGATOR_ROUTE_NAME);
      } else {
        Toast.showWithGravity('התחברת בהצלחה!', Toast.LONG, Toast.CENTER);
      }

      return;
    } 

    Toast.showWithGravity('אחד הפרטים לא תקין', Toast.LONG, Toast.CENTER);
  };

  const dataIsValid = data => {
    return onlyHebrewPattern.test(data.name) && phoneNumberPattern.test(data.phoneNumber);
  }

  const handleUserNameChange = (userNameText) => {
    if (!onlyHebrewPattern.test(userNameText)) {
      Toast.showWithGravity('השם צריך להיות בעברית (מותר רווחים ומקף)', Toast.LONG, Toast.CENTER);  
    }
    setValue('name', userNameText, true);
  };

  return (
    <Card style={styles.cardStyle}>
      <CardItem style={styles.cardForm}>
        <Form style={styles.cardForm}>
          <Item floatingLabel>
            <Label style={styles.label}>שם מלא</Label>
            <Input style={styles.input} placeholder="שם מלא"
              ref={register({ name: 'name' }, { required: true })}
              onChangeText={text => handleUserNameChange(text)} />
            {errors.name && <Icon style={styles.checkIcon} name='dislike2' type={'AntDesign'} />}
          </Item>
          <Item floatingLabel style={styles.item} last>
            <Label style={styles.label}>מספר טלפון</Label>
            <Input style={styles.input} placeholder="מספר טלפון"
              keyboardType={'phone-pad'}
              dataDetectorTypes={'phoneNumber'}
              ref={register({ name: 'phoneNumber' },
                { required: true, pattern: /^05\d{8}$/g })}
              onChangeText={text => setValue('phoneNumber', text, true)} />
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
    elevation: 0,
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
    color: 'white',
    marginVertical: 3,
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