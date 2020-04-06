import { Button, Icon } from 'native-base';
import React, { Component, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';

import { HeeboText } from '../../components/HeeboText';

const InfoButton = ({ ride }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.centeredView}>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.dataLine}>
                            <HeeboText style={styles.textStyle}>רזיאל יעקב</HeeboText>
                            <HeeboText style={styles.textStyle}>0525217550</HeeboText>
                        </View>
                        <View style={styles.dataLine}>
                            <HeeboText style={styles.textStyle}>מ-אשקלון</HeeboText>
                            <HeeboText style={styles.textStyle}>ל-צריפין</HeeboText>
                        </View>
                        <View style={styles.dataLine}>
                            <HeeboText style={styles.textStyle}>יום שלישי, 18:30</HeeboText>
                        </View>
                        <Button dark style={styles.closeButton} onPress={() => { setModalVisible(!modalVisible); }}>
                            <HeeboText>סגור</HeeboText>
                        </Button>
                    </View>
                </View>
            </Modal>

            <Button dark transparent onPress={() => { setModalVisible(true); }}>
                <Icon name='md-information-circle' />
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '70%',
        height: '30%',
        backgroundColor: '#C7C4C4',
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
        borderRadius: 15
    },
    dataLine: {
        flexDirection: 'row',
        flex: 1,
    }
});

export default InfoButton;