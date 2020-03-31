import React, {useState} from 'react';
import { StyleSheet, Text, View, Picker, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import sendRideDataRequest from '../requests/sendRideDataRequest'

const ALL_ORIGINS = ["צריפין", "תל השומר", "קריה", "שלישות רמת גן", "עיר הבהדים"];
const ALL_DESTINATIONS = ["תל-אביב", "ירושלים", "נתניה", "חולון", "בת-ים", "אשקלון"];
const MAX_DAYS_FROM_TODAY_A_RIDE_CAN_BE_ORDERED = 14;
const DEFAULT_MINUTES_FROM_NOW = 30;
const FAKE_TELEPHONE = "0541234567"

const FindRidePage = () => {
    const [origin, setOrigin] = useState(ALL_ORIGINS[0]);
    const [destination, setDestination] = useState(ALL_DESTINATIONS[0]);

    const [date, setDate] = useState(new Date());
    const [isDateVisible, setDateVisibility] = useState(false);

    const [time, setTime] = useState(new Date(moment().add(DEFAULT_MINUTES_FROM_NOW, 'minutes')));
    const [isTimeVisible, setTimeVisibility] = useState(false);
    
    const onDateEvent = (event, newDate) => {
        setDateVisibility(false);

        if(event.type === 'set') {
            setDate(newDate);
        }
    };

    const onTimeEvent = (event, newTime) => {
        setTimeVisibility(false);

        if(event.type === 'set' && newTime > time) {
            setTime(newTime);
        }
    };
    
    const getFormattedDate = () => moment(date).format('MM/DD/YYYY');
    const getFormattedTime = () => moment(time).format('HH:mm');

    const sendRideData = async () => {
        try {
            await sendRideDataRequest(FAKE_TELEPHONE, getFormattedDate(), getFormattedTime(), origin, destination);
        }
        catch(exception) {
            console.log("Error contacting the server");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.fieldName}>בחר מיקום התחלתי</Text>
            <Picker selectedValue={destination} 
                    onValueChange={newOrigin => setOrigin(newOrigin)}>
                {convertListToPickerOptions(ALL_ORIGINS)}
            </Picker>

            <Text style={styles.fieldName}>בחר יעד</Text>
            <Picker selectedValue={destination} 
                    onValueChange={newDestination => setDestination(newDestination)}>
                {convertListToPickerOptions(ALL_DESTINATIONS)}
            </Picker>

            <Button title={'בחר תאריך'} onPress={() => setDateVisibility(true)}/>
            {
                isDateVisible && 
                <DateTimePicker 
                    value={date} 
                    onChange={onDateEvent}
                    minimumDate={new Date()}
                    maximumDate={new Date(moment().add(MAX_DAYS_FROM_TODAY_A_RIDE_CAN_BE_ORDERED, 'days'))}
                />
            }
            <Text>תאריך: {getFormattedDate()}</Text>

            <Button title={'בחר שעה'} onPress={() => setTimeVisibility(true)}/>
            
            {
                isTimeVisible &&
                <DateTimePicker 
                    value={time} 
                    mode={'time'}
                    onChange={onTimeEvent}
                    minimumDate={new Date()}
                />
            }

            <Text>זמן: {getFormattedTime()}</Text>

            <Button title={'חפש טרמפ'} onPress={sendRideData}/>
        </View>
    );
}

const convertListToPickerOptions = list =>
    list.map(item => (<Picker.Item key={item} label={item} value={item}/>))

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      width: '80%'
    },
    fieldName: {
      backgroundColor: 'silver'
    }
  });

export default FindRidePage;