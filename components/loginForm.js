import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, CheckBox, RecyclerViewBackedScrollView, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import LoginDriverForm from './loginDriverForm';
import { LoginFormStyles } from '../styles/loginFormStyles'

export default function LoginForm() {
    const [driverCheckbox, setDriverCheckbox] = useState(false);
    const [passengerCheckbox, setPassengerCheckbox] = useState(false);

    function handleCheckboxChange(checkboxName) {
        if (checkboxName == 'driver') {
            setDriverCheckbox(!driverCheckbox);

            if (passengerCheckbox) {
                setPassengerCheckbox(false);
            }
        }
        else if (checkboxName == 'passenger') {
            setPassengerCheckbox(!passengerCheckbox);

            if (driverCheckbox) {
                setDriverCheckbox(false);
            }
        }
    }

    return (
        <View style={{backgroundColor:'#efefef', flex:11}}>
            <Formik
                initialValues={{
                    name: '',
                    phoneNumber: '',
                    isDriver: false,
                    isPassenger: false,
                    departureHomeTime: '',
                    departureBaseTime: '',
                    city: '',
                    base: '',
                    freeSeats: '',
                }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={styles.container}>
                        <Text style={LoginFormStyles.text}>שם</Text>
                        <TextInput
                            style={LoginFormStyles.textInput}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        <Text style={LoginFormStyles.text}>מספר פלאפון</Text>
                        <TextInput
                            style={LoginFormStyles.textInput}
                            onChangeText={handleChange('phoneNumber')}
                            onBlur={handleBlur('phoneNumber')}
                            value={values.phoneNumber}
                            keyboardType='numeric'
                        />
                        <Text style={LoginFormStyles.text}>עיר מגורים</Text>
                        <TextInput
                            style={LoginFormStyles.textInput}
                            onChangeText={handleChange('city')}
                            onBlur={handleBlur('city')}
                            value={values.city}
                        />
                        <Text style={LoginFormStyles.text}>מיקום בסיס</Text>
                        <TextInput
                            style={LoginFormStyles.textInput}
                            onChangeText={handleChange('base')}
                            onBlur={handleBlur('base')}
                            value={values.base}
                        />
                        <View style={styles.checkboxesContainer}>
                            <Text style={styles.checkboxText}>נהג</Text>
                            <CheckBox value={driverCheckbox} onValueChange={() => handleCheckboxChange('driver')} />
                            <Text style={styles.checkboxText}>נוסע</Text>
                            <CheckBox value={passengerCheckbox} onValueChange={() => handleCheckboxChange('passenger')} />
                        </View>

                        {driverCheckbox && <LoginDriverForm handleChange={handleChange} handleBlur={handleBlur} values={values} />}

                        <TouchableOpacity style={styles.submitContainer} onPress={handleSubmit}>
                            <Text style={styles.submit}>הירשם</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    submit: {
        fontSize: 30,
    },
    submitContainer: {
        marginTop: 30,
        borderColor: 'black',
        borderRadius: 4,
        borderWidth: 2,
        width: 120,
        alignItems: 'center',
        backgroundColor: 'cornflowerblue',
    },
    checkboxesContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    checkboxText: {
        fontSize: 20,
        marginLeft: 30,
    },
});