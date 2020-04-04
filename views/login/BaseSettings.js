import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { ALL_BASES } from '../../assets/jsons/bases';
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

    ALL_BASES.forEach(base => {
        locations.push(base.name);
    });

    return locations;
}

const BaseSettings = () => {
    const { control } = useForm();

    return (
        <View>
            <View style={styles.asRow}>
                <ControlledPicker name="baseLocation" control={control}
                    options={getHomeLocations("בסיס")} />
            </View>
            <View style={styles.asRow}>
                <ControlledPicker name="leavingBaseTime" control={control}
                    options={getTimesOptions("שעת יציאה מהבסיס")} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    asRow: {
        flex: 1,
        flexDirection: 'row',
        margin: 0,
        alignItems: 'center',

    },
});


export default BaseSettings;