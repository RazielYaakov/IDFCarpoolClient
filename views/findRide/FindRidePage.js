import React, {useState} from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import moment from 'moment';
import sendRideDataRequest from '../../requests/sendRideDataRequest'
import { Container, Content, Card, CardItem } from 'native-base';
import ControlledPicker from '../../components/ControlledPicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ALL_ORIGINS = ["צריפין", "תל השומר", "קריה", "שלישות רמת גן", "עיר הבהדים"];
const ALL_DESTINATIONS = ["תל-אביב", "ירושלים", "נתניה", "חולון", "בת-ים", "אשקלון"];
const MAX_DAYS_FROM_TODAY_A_RIDE_CAN_BE_ORDERED = 14;
const FAKE_TELEPHONE = "0541234567"
import {useForm} from 'react-hook-form';

const FindRidePage = () => {
    const {control, handleSubmit, setValue, register, errors} = useForm();

    const [isDateVisible, setDateVisibility] = useState(false);

    const onSubmit = async ({ origin, destination, date }) => {
        try {
            console.log(`Origin:${origin}, destination:${destination}, date:${date}, errors:${JSON.stringify(errors)}`);
            await sendRideDataRequest(FAKE_TELEPHONE, date, origin, destination);
        }
        catch(exception) {
            console.log("Error contacting the server");
        }
    }

    return (
        <Container>
            <Content contentContainerStyle={styles.content}>
                <Card style={styles.cardStyle}>
                    <CardItem style={styles.cardItem}>
                        <Text style={styles.text}>בחר מיקום התחלתי</Text>
                    </CardItem>

                    <CardItem style={styles.cardItem}>
                        <ControlledPicker name="origin" control={control} options={ALL_ORIGINS}/>
                    </CardItem>

                    <CardItem style={styles.cardItem}>
                        <Text style={styles.text}>בחר יעד</Text>
                    </CardItem>

                    <CardItem style={styles.cardItem}>
                        <ControlledPicker name="destination" control={control} options={ALL_DESTINATIONS}/>
                    </CardItem>

                    <CardItem style={styles.cardItem}>
                        <Button style={styles.button} title={'בחר תאריך'} onPress={() => setDateVisibility(true)}/>
                    </CardItem>
                    
                    <DateTimePickerModal
                        ref={register({ name: 'date' })}
                        isVisible={isDateVisible}
                        mode="datetime"
                        onConfirm={date => {
                                setDateVisibility(false);
                                setValue('date', date);
                            }
                        }
                        onCancel={() => setDateVisibility(false)}
                        minimumDate={new Date()}
                        maximumDate={new Date(moment().add(MAX_DAYS_FROM_TODAY_A_RIDE_CAN_BE_ORDERED, 'days'))}
                    />

                    <CardItem style={styles.cardItemWithSubmit}>
                        <Button title={'בקש טרמפ'} onPress={handleSubmit(onSubmit)}/>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
      width: '80%',
    },
    cardItem: {
        justifyContent: 'center',
    },
    text: {
        fontSize: 20
    },
    cardItemWithSubmit: {
        justifyContent: 'center',
        marginTop: '10%'
    },
    content: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });

export default FindRidePage;