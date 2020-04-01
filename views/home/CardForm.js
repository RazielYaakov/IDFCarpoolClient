import React from 'react';
import {
  Body,
  Button,
  Card,
  CardItem,
  Form,
  Icon,
  Input,
  Item,
  Label,
} from 'native-base';
import {HebboText} from '../../components/text/HebboText';
import {StyleSheet, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const CardForm = ({navigation}) => {
  const {register, setValue, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    Alert.alert('Form Data', JSON.stringify(data));
    avigation.navigate('Login');
  };

  return (
      <Card style={styles.cardStyle} opacity={0.75}>
        <CardItem style={styles.cardForm}>
          <Form style={styles.cardForm}>
            <Item floatingLabel>
              <Label style={styles.label}>שם מלא</Label>
              <Input style={styles.input} placeholder="שם מלא"
                     ref={register({name: 'name'},
                         {required: true, minLength: 2})}
                     onChangeText={text => setValue('name', text, true)}/>
              <Icon style={styles.checkIcon} name='checkmark-circle'/>
            </Item>
            <Item floatingLabel style={styles.item} last>
              <Label style={styles.label}>מספר פלאפון</Label>
              <Input autoCompleteType={'tel'}
                     keyboardType={'phone-pad'}
                     dataDetectorTypes={'phoneNumber'}
                     style={styles.input} placeholder="מספר פלאפון"
                     ref={register({name: 'phoneNumber'},
                         {required: true, pattern: /^05\d{8}$/i})}
                     onChangeText={text => setValue('name', text, true)}/>
              {errors.phoneNumber &&
              <HebboText>errors.phoneNumber </HebboText>}
            </Item>
          </Form>
        </CardItem>
        <CardItem>
          <Body>
            <Button iconRight block
                    onPress={handleSubmit(onSubmit)}>
              <HebboText>התחבר</HebboText>
              <Icon name='arrow-forward'/>
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
  },
  cardForm: {
    width: '100%',
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
    color: 'rgb(86,220,96)',
  },
});