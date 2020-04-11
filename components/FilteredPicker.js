import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import ModalFilterPicker from 'react-native-modal-filter-picker'
import { ALL_LOCATIONS } from '../constants/constants'
import {HeeboText} from '../components/HeeboText'
import {Entypo} from '@expo/vector-icons'

const { height, width } = Dimensions.get('window');

export default function FiletredPicker({ handlePick }) {
    const [visible, setVisible] = useState(false);
    const [picked, setPicked] = useState('בחר');

    const onShow = () => {
        setVisible(true);
    }

    const onSelect = (picked) => {
        setVisible(false);
        setPicked(picked.label);
        handlePick(picked.label);
    }

    const onCancel = () => {
        setVisible(false);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.textContainer} onPress={onShow}>
                <Entypo name="select-arrows" size={24}/>
                <HeeboText style={styles.text}>{picked}</HeeboText>
            </TouchableOpacity>
            <ModalFilterPicker
                visible={visible}
                onSelect={onSelect}
                onCancel={onCancel}
                options={ALL_LOCATIONS}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:16,
        textAlign: "center",
    },
    container:{
        marginVertical: height * 0.01,
    },
    textContainer:{
        paddingVertical: height * 0.005,
        flexDirection: 'row',
        borderWidth: 1,
        width: width * 0.3,
        borderRadius: 4,
    },
    
});