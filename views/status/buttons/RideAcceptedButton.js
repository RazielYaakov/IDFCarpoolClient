import { Button, Icon } from 'native-base';
import React, { Component, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, StyleSheet, View, Dimensions} from 'react-native';

import { HeeboText } from '../../../components/HeeboText';

const { height, width } = Dimensions.get('window');

const RideAcceptedButton = ({ handleAccept }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleClickAccept = () => {
        handleAccept(); 
        setModalVisible(false)
    };

    return (
        <View style={styles.centeredView}>
            <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => { }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <HeeboText isBold={true} style={{ color: 'white' }}>לאשר את הטרמפ?</HeeboText>
                        <View style={styles.buttons}>
                            <Button light style={styles.closeButton}
                                onPress={() => handleClickAccept()}>
                                <HeeboText isBold={true} style={{color: '#49A455'}}>כן אחי</HeeboText>
                            </Button>
                            <Button danger style={styles.closeButton} onPress={() => { setModalVisible(false); }}>
                                <HeeboText isBold={true}>לא, התבלבלתי</HeeboText>
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>

            <Button transparent style={styles.buttonStyle} onPress={() => setModalVisible(true)}>
                <Icon style={styles.icon} name='checkcircle' type={'AntDesign'} />
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        color: '#05A61A',
    },
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
        width: width * 0.65,
        height: height * 0.17,
        backgroundColor: '#49A455',
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
        borderRadius: 15,
        marginHorizontal: 10
    },
    buttons: {
        flexDirection: 'row'
    }
});

export default RideAcceptedButton;