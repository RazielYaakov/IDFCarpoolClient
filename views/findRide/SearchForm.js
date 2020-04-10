import moment from 'moment';
import { tz } from 'moment-timezone';
import { Button, Card, CardItem, CheckBox, Container, Icon, Radio } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity, ScrollView } from 'react-native';
import { ImageBackground, Modal, StyleSheet, View } from 'react-native';
import Toast from 'react-native-simple-toast';

import ControlledDateModal from '../../components/ControlledDateModal';
import ControlledPicker from '../../components/ControlledPicker';
import { HeeboText } from '../../components/HeeboText';
import { ALL_CITIES } from '../../constants/constants';
import newOfferRequest from '../../requests/NewOfferRequest';
import findRideRequest from '../../requests/sendRideDataRequest';

const MAX_DAYS_FROM_TODAY_A_RIDE_CAN_BE_ORDERED = 7;

const SearchForm = ({ control, onSubmit, userName, phoneNumber }) => {
  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      userType: 'passenger',
      isPermanent: false,
    }
  });

  const [dateTimeText, setDateTimeText] = useState('*לא נבחר תאריך');
  const [isDateVisible, setDateVisibility] = useState(false);
  const [isDriverSelected, setDriverSelected] = useState(false);
  const [isPermanentOffer, setPermanentOffer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleCheckBox = () => {
    if (isDriverSelected) {
      setPermanentOffer(!isPermanentOffer);
      setValue('isPermanent', isPermanentOffer, true);
    }
  };

  const handleSource = (chosenSource) => {
    setValue('source', chosenSource, true);
  };

  const handleDestination = (chosenDestination) => {
    setValue('destination', chosenDestination, true);
  };

  const handleDateChoose = (chosenDate) => {
    setValue('dateTime', chosenDate, true);
    
    var dateTime = new Date(chosenDate);
    var minutes = dateTime.getMinutes() > 9 ? dateTime.getMinutes() : ('0' + dateTime.getMinutes());
    var hours = dateTime.getHours() > 9 ? dateTime.getHours() : ('0' + dateTime.getHours());
    var time = hours + ':' + minutes;
    var day = dateTime.getDate() > 9 ? dateTime.getDate() : ('0' + dateTime.getDate());
    var month = (dateTime.getMonth() + 1) > 9 ? (dateTime.getMonth() + 1) : ('0' + (dateTime.getMonth() + 1));
    var date = day + '/' + month;
    setDateTimeText(time + ',  ' + date);
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

  const isValidSubmit = (data) => {
    return data.source != undefined && data.destination != undefined && data.dateTime != undefined;
  };

  const createNewOffer = async (data) => {
    if (isValidSubmit(data)) {
      const newOfferResponse = await newOfferRequest({
        source: data.source,
        destination: data.destination,
        dateTime: data.dateTime,
        isPermanent: data.isPermanent,
        phoneNumber: phoneNumber,
        name: userName
      });
      Toast.showWithGravity('תודה על ההצעה אלוף', Toast.LONG, Toast.CENTER);
      return;
    }

    setModalVisible(true);
  };

  const findRide = async (data) => {
    if (isValidSubmit(data)) {
      const newOfferResponse = await findRideRequest({
        source: data.source,
        destination: data.destination,
        dateTime: data.dateTime,
        phoneNumber: phoneNumber,
      });

      Toast.showWithGravity('מחפש לך', Toast.LONG, Toast.CENTER);
      return;
    }

    setModalVisible(true);
  };

  const getSubmitButton = () => {
    return
  }

  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/search-back.jpg')}
        style={styles.backgroundImage}>

        <Card style={styles.searchCard}>
          <CardItem style={styles.firstRow}>
            <CardItem style={styles.userTypeItem}>
              <Radio selectedColor={'black'} ref={register({ name: 'userType' })} selected={!isDriverSelected} onPress={() => handleRadio('passenger')} />
              <HeeboText style={styles.radioButtonText} isBold={true}>נוסע</HeeboText>
              <Radio selectedColor={'black'} ref={register({ name: 'userType' })} selected={isDriverSelected} onPress={() => handleRadio('driver')} />
              <HeeboText style={styles.radioButtonText} isBold={true}>נהג</HeeboText>
            </CardItem>
          </CardItem>
          <CardItem style={styles.secondRow}>
            <CardItem style={styles.locationItem}>
              <HeeboText isBold={true}>מאיפה?</HeeboText>
              <ControlledPicker style={styles.locationPicker} rules={{ required: true }} ref={register({ name: 'source' })} name="source" control={control}
                options={ALL_CITIES} handlePick={handleSource} />
            </CardItem>
            <CardItem style={styles.locationItem}>
              <HeeboText isBold={true}> לאן?    </HeeboText>
              <ControlledPicker style={styles.locationPicker} rules={{ required: true }} ref={register({ name: 'destination' })} name="destination" control={control}
                options={ALL_CITIES} handlePick={handleDestination} />
            </CardItem>
          </CardItem>
          <CardItem style={styles.thirdRow}>
            <CardItem style={styles.datePicker}>
              <Button iconRight dark transparent onPress={() => setDateVisibility(true)}>
                <HeeboText isBold={true} style={{ width: 70, fontSize: 17 }}>מתי?</HeeboText>
                <Icon name='calendar' type={'FontAwesome'} />
              </Button>
              <HeeboText style={{ fontSize: 17, }}>{dateTimeText}</HeeboText>
            </CardItem>
          </CardItem>
          {isDriverSelected ?
            <Button style={styles.submitButton} onPress={handleSubmit(createNewOffer)} dark >
              <HeeboText style={{ paddingLeft: 10 }} isBold={true}>הצע טרמפ</HeeboText>
              <Icon style={{ marginLeft: 0 }} name="notification" type={'AntDesign'} />
            </Button>
            :
            <Button style={styles.submitButton} onPress={handleSubmit(findRide)} dark>
              <HeeboText style={{ paddingLeft: 10 }} isBold={true}>חפש טרמפ</HeeboText>
              <Icon style={{ marginLeft: 0 }} name="search1" type={'AntDesign'} />
            </Button>
          }
          {isDriverSelected && <CardItem style={styles.userTypeItem}>
            <CheckBox ref={register({ name: 'permanentOffer' })} checked={isPermanentOffer && isDriverSelected} color="green" onPress={() => handleCheckBox()} />
            <HeeboText style={{ marginLeft: 15 }} isBold={true}>הצע באופן קבוע</HeeboText>
          </CardItem>}
          {modalVisible && <View style={styles.centeredView}>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <HeeboText isBold={true} style={{ color: 'white' }}>לא מילאת פרטים כמו שצריך...</HeeboText>
                  <Button danger style={styles.closeButton} onPress={() => { setModalVisible(false) }}>
                    <HeeboText isBold={true}>סגור</HeeboText>
                  </Button>
                </View>
              </View>
            </Modal>
          </View>}
          <ControlledDateModal
            control={control}
            name='date'
            mode='datetime'
            rules={{
              required: true,
              validate: date => date > new Date(),
            }}
            ref={register({ name: 'dateTime' })}
            isVisible={isDateVisible}
            setVisibility={setDateVisibility}
            handlePick={handleDateChoose}
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
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchCard: {
    width: '85%',
    height: '52%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 0,
    opacity: 0.8,
    elevation: 1
  },
  firstRow: {
    backgroundColor: 'transparent',
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondRow: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  thirdRow: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  userTypeItem: {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: 'transparent',
    marginVertical: 10,
    alignSelf: 'center'
  },
  locationItem: {
    flexDirection: 'column',
    width: '50%',
    backgroundColor: 'transparent',
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
  locationPicker: {
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
  datePicker: {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: 'transparent',
    flexDirection: 'column',
  },
  options: {
    width: '95%',
    height: '45%',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    opacity: 0.8,
    elevation: 1
  },
  radioButtonText: {
    marginRight: 10,
    marginLeft: 5,
    fontSize: 17
  },
  submitButton: {
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '70%',
    height: '17%',
    backgroundColor: '#9A4343',
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'space-between',
    paddingTop: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  closeButton: {
    marginBottom: 15,
    textAlign: "center",
    color: 'white',
    borderRadius: 15,
    marginHorizontal: 10
  },
});
