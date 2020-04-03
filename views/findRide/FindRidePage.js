import { Card, CardItem, Container, Content } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, StyleSheet, Text } from 'react-native';
import ControlledDateModal from '../../components/ControlledDateModal';
import ControlledPicker from '../../components/ControlledPicker';
import sendRideDataRequest from '../../requests/sendRideDataRequest';
import { ALL_BASES, ALL_CITIES } from '../../constants/constants';

const MAX_DAYS_FROM_TODAY_A_RIDE_CAN_BE_ORDERED = 14;
const FAKE_TELEPHONE = "0541234567"

const FindRidePage = () => {
    const {control, handleSubmit, errors} = useForm();

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

    const getErrorMessage = () => {
        let message = null;

        if(errors?.date?.type === "required") {
            message = "לא הוכנס תאריך";
        }
        
        if(errors?.date?.type === "validate") {
            message = "התאריך חייב להיות עתידי";
        }

        return message 
            ? <CardItem style={styles.errorTextCard}><Text style={styles.errorText}>{message}</Text></CardItem> 
            : null;
    }

    return (
        <Container>
            <Content contentContainerStyle={styles.content}>
                <Card style={styles.cardStyle}>
                    <CardItem style={styles.cardItem}>
                        <Text style={styles.text}>בחר מיקום התחלתי</Text>
                    </CardItem>

                    <CardItem style={styles.cardItem}>
                        <ControlledPicker name="origin" control={control} options={ALL_BASES}/>
                    </CardItem>

                    <CardItem style={styles.cardItem}>
                        <Text style={styles.text}>בחר יעד</Text>
                    </CardItem>

                    <CardItem style={styles.cardItem}>
                        <ControlledPicker name="destination" control={control} options={ALL_CITIES}/>
                    </CardItem>

                    <CardItem style={styles.cardItem}>
                        <Button style={styles.button} title={'בחר תאריך'} onPress={() => setDateVisibility(true)}/>
                    </CardItem>

                    <ControlledDateModal 
                        control={control} 
                        name='date'
                        mode='datetime'
                        rules={{
                            required: true, 
                            validate: date => date > new Date()
                        }}
                        isVisible={isDateVisible} 
                        setVisibility={setDateVisibility}
                    />

                    {getErrorMessage()}

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
    },
    errorTextCard: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        fontSize: 15,
        color: 'red'
    }
  });

export default FindRidePage;