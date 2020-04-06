import { Button, Icon } from 'native-base';
import React, { Component, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, StyleSheet, View } from 'react-native';

import { HeeboText } from '../../components/HeeboText';

const CancelButton = ({ handleCancel }) => {
    const { handleSubmit } = useForm();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.centeredView}>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <HeeboText isBold={true}>אתה בטוח שאתה רוצה לבטל?</HeeboText>
                        <View style={styles.buttons}>
                            <Button danger style={styles.closeButton}
                                onPress={handleSubmit(handleCancel)}>
                                <HeeboText isBold={true}>כן אחי</HeeboText>
                            </Button>
                            <Button success style={styles.closeButton} onPress={() => { setModalVisible(false); }}>
                                <HeeboText isBold={true}>לא, התבלבלתי</HeeboText>
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>

            <Button danger transparent style={styles.buttonStyle} onPress={() => setModalVisible(true)}>
                <Icon style={styles.icon} name='dislike2' type={'AntDesign'} />
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 80,
        alignSelf: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        elevation: 0,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '70%',
        height: '17%',
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
        borderRadius: 15,
        marginHorizontal: 10
    },
    buttons: {
        flexDirection: 'row'
    }
});

export default CancelButton;