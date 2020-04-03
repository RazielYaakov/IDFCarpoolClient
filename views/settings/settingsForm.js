import { Card, CardItem } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, StyleSheet, Text } from 'react-native';
import ControlledDateModal from '../../components/ControlledDateModal';
import ControlledPicker from '../../components/ControlledPicker';
import { ALL_BASES, ALL_CITIES } from '../../constants/constants';

export default function StatusForm() {
    const {control, handleSubmit, errors} = useForm();

    const [isTimeFromHomeVisible, setTimeFromHomeVisibleVisibility] = useState(false);
    const [isTimeFromBaseVisible, setTimeFromBaseVisibleVisibility] = useState(false);

    const onSubmit = async ({ city, base, rideTimeFromHome, rideTimeFromBase }) => {
        try {
            console.log(`City:${city}, base:${base}, rideTimeFromHome:${rideTimeFromHome}, rideTimeFromBase:${rideTimeFromBase}}`);
        }
        catch(exception) {
            console.log("Error contacting the server");
        }
    }

    const getErrorMessages = () => {
        let errorMessages = [];

        if(errors?.rideTimeFromHome?.type === "required") {
            errorMessages.push('חייב לבחור זמן יציאה מהבית');
        }
        
        if(errors?.rideTimeFromBase?.type === "required") {
            errorMessages.push('חייב לבחור זמן יציאה מהבסיס');
        }

        return errorMessages.length > 0 ? 
            <>
                {
                    errorMessages.map(errorMessage => 
                        <CardItem key={errorMessage} style={styles.errorTextCard}>
                            <Text style={styles.errorText}>{errorMessage}</Text>
                        </CardItem>
                    )
                }
            </> :
            null;
    }

    return (
        <Card style={styles.cardStyle}>
            <CardItem style={styles.cardItem}>
                <Text style={styles.text}>עיר מגורים</Text>
            </CardItem>

            <CardItem style={styles.cardItem}>
                <ControlledPicker name="city" control={control} options={ALL_CITIES}/>
            </CardItem>

            <CardItem style={styles.cardItem}>
                <Text style={styles.text}>בסיס</Text>
            </CardItem>

            <CardItem style={styles.cardItem}>
                <ControlledPicker name="base" control={control} options={ALL_BASES}/>
            </CardItem>

            <CardItem style={styles.cardItem}>
                <Button style={styles.button} title={'קבע שעת יציאה מהבית'} onPress={() => setTimeFromHomeVisibleVisibility(true)}/>
            </CardItem>

            <ControlledDateModal 
                control={control} 
                name='rideTimeFromHome' 
                isVisible={isTimeFromHomeVisible} 
                setVisibility={setTimeFromHomeVisibleVisibility}
                mode='time'
                rules={{ required: true, validate: () => true }}
            />

            <CardItem style={styles.cardItem}>
                <Button style={styles.button} title={'קבע שעת יציאה מהבסיס'} onPress={() => setTimeFromBaseVisibleVisibility(true)}/>
            </CardItem>

            <ControlledDateModal 
                control={control} 
                name='rideTimeFromBase' 
                isVisible={isTimeFromBaseVisible} 
                setVisibility={setTimeFromBaseVisibleVisibility}
                mode='time'
                rules={{ required: true, validate: () => true }}
            />

            {getErrorMessages()}

            <CardItem style={styles.cardItemWithSubmit}>
                <Button title={'שמור נתונים'} onPress={handleSubmit(onSubmit)}/>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        width: '90%'
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