import moment from 'moment';
import { tz } from 'moment-timezone';
import { Button, Card, CardItem, CheckBox, Container, Icon, Radio } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImageBackground, Modal, StyleSheet, View } from 'react-native';
import Toast from 'react-native-simple-toast';

import ControlledDateModal from '../../components/ControlledDateModal';
import ControlledPicker from '../../components/ControlledPicker';
import { HeeboText } from '../../components/HeeboText';
import { ALL_CITIES } from '../../constants/constants';

const MAX_DAYS_FROM_TODAY_A_RIDE_CAN_BE_ORDERED = 7;

const SearchForm = ({ control, onSubmit }) => {
  const { register, setValue, getValues, handleSubmit } = useForm({
    defaultValues: {
      userType: 'passenger',
      permanentOffer: false,
    }
  });

  const [dateTimeText, setDateTimeText] = useState();
  const [isDateVisible, setDateVisibility] = useState(false);
  const [isDriverSelected, setDriverSelected] = useState(false);
  const [isPermanentOffer, setPermanentOffer] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCheckBox = () => {
    if (isDriverSelected) {
      setPermanentOffer(!isPermanentOffer);
      setValue('permanentOffer', isPermanentOffer, true);
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
    setDateTimeText(moment(chosenDate.toString()).format('LLL'));
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
          <CheckBox ref={register({ name: 'permanentOffer' })} checked={isPermanentOffer && isDriverSelected} color="green" onPress={() => handleCheckBox()} />
          <HeeboText style={{ marginLeft: 15 }} isBold={true}>הצע באופן קבוע</HeeboText>
        </CardItem>
      );
    }
  }

  const getDateMode = () => {
    return isPermanentOffer ? 'time' : 'datetime';
  }

  const showErrorModal = () => {
    if (modalVisible) {
      return (
        <View style={styles.centeredView}>
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
        </View>
      );
    }
  }

  const isValidSubmit = (data) => {
    return data.source != undefined && data.destination != undefined && data.dateTime != undefined;
  };

  const createNewRideOption = (data) => {
    if (isValidSubmit(data)) {
      //callNewRideRequestMethod
      Toast.showWithGravity('תודה על ההצעה אלוף', Toast.LONG, Toast.CENTER);
      return;
    }

    setModalVisible(true);
  };

  const findRide = (data) => {
    if (isValidSubmit(data)) {
      //callFindRideRequest
      Toast.showWithGravity('מחפש לך', Toast.LONG, Toast.CENTER);
      return;
    }

    setModalVisible(true);
  };

  const getSubmitButton = () => {
    if (isDriverSelected) {
      return (
        <Button style={styles.submitButton} onPress={handleSubmit(createNewRideOption)} dark >
          <HeeboText style={{ paddingLeft: 10 }} isBold={true}>הצע טרמפ</HeeboText>
          <Icon style={{ marginLeft: 0 }} name="notification" type={'AntDesign'} />
        </Button>
      );
    }

    return (
      <Button style={styles.submitButton} onPress={handleSubmit(findRide)} dark>
        <HeeboText style={{ paddingLeft: 10 }} isBold={true}>חפש טרמפ</HeeboText>
        <Icon style={{ marginLeft: 0 }} name="search1" type={'AntDesign'} />
      </Button>
    )
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
            <ControlledPicker rules={{ required: true }} ref={register({ name: 'source' })} name="source" control={control}
              options={ALL_CITIES} handlePick={handleSource} />
          </CardItem>
          <CardItem style={styles.cardItem}>
            <HeeboText style={styles.locationText} isBold={true}> לאן?    </HeeboText>
            <ControlledPicker rules={{ required: true }} ref={register({ name: 'destination' })} name="destination" control={control}
              options={ALL_CITIES} handlePick={handleDestination} />
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Button style={{ justifyContent: 'flex-start', flex: 1, marginLeft: 10, }} iconRight dark transparent onPress={() => setDateVisibility(true)}>
              <HeeboText isBold={true} style={{ width: 70, fontSize: 17 }}>מתי?</HeeboText>
              <View style={styles.dateTimeText}>
                <HeeboText isBold={true} style={{fontSize: 14}}>{dateTimeText}</HeeboText>
              </View>
            </Button>
          </CardItem>
          {getSubmitButton()}
          {showAlwaysOffer()}
          {showErrorModal()}
          <ControlledDateModal
            control={control}
            name='date'
            mode={getDateMode()}
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
  dateTimeText: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
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
  locationText: {
    marginHorizontal: 25,
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
  textStyle: {
    textAlign: "center",
    marginHorizontal: 5
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
