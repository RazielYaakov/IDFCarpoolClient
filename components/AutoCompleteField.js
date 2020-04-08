import { View } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

import { ALL_CITIES } from '../constants/constants';
import { HeeboText } from './HeeboText';

const AutoCompleteField = ({ options }) => {
    const [data, setData] = useState(ALL_CITIES);

    const updateData = (query) => {
        var remainingElements = [];
        ALL_CITIES.forEach(cityName => {
            if (cityName.includes(query)) {
                remainingElements.push(cityName);
            }
        });

        setData(remainingElements);
    };

    return (
        <View style={styles.autoCompleteView}>
            <Autocomplete
                style={styles.autoComplete}
                placeholder="מאיפה"
                data={data}
                defaultValue={undefined}
                onChangeText={text => updateData(text)}
                renderItem={({ item, i }) => (
                    <HeeboText style={styles.cityOption}>{item}</HeeboText>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    autoCompleteView: {
        flex: 1,
        width: '90%',
        textAlign: 'right',
        fontFamily: 'Heebo',
    },
    autoComplete: {
        width: '100%',
        textAlign: 'right',
        fontFamily: 'Heebo',
        backgroundColor: 'white'
    },
    cityOption:{
        width: '90%',
    },
});

export default AutoCompleteField;