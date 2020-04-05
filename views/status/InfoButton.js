import { Button, Icon } from 'native-base';
import React, { Component, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';

import { HeeboText } from '../../components/HeeboText';

const InfoButton = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.centeredView}>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <HeeboText style={styles.textStyle}>Hello World!</HeeboText>

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
        height: '50%',
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
        textAlign: "center"
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
    }
});

export default InfoButton;