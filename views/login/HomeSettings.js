import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { ALL_CITIES } from '../../assets/jsons/israel_cities_list';
import ControlledPicker from '../../components/ControlledPicker';

function getTimesOptions(title) {
    var hour;
    var timeOptions = [title];

    for (hour = 6; hour < 22; hour++) {
        timeOptions.push(`${hour}:00`);
        timeOptions.push(`${hour}:15`);
        timeOptions.push(`${hour}:30`);
        timeOptions.push(`${hour}:45`);
    }

    return timeOptions;
}

function getHomeLocations(title) {
    var locations = [title];

    ALL_CITIES.forEach(city => {
        locations.push(city.name);
    });

    return locations;
}

const HomeSettings = () => {
    const { control } = useForm();

    return (
        <View style={styles.asRow}>
            <ControlledPicker name="homeLocation" control={control}
                options={getHomeLocations("מקום מגורים")} />
            <ControlledPicker name="leavingHomeTime" control={control}
                options={getTimesOptions("שעת יציאה מהבית")} />
        </View>
    )
};

const styles = StyleSheet.create({
    asRow: {
        flex: 1,
    },
});


export default HomeSettings;