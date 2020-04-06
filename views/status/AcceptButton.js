import { Button, Icon } from 'native-base';
import React, { Component, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, StyleSheet, View } from 'react-native';

import { HeeboText } from '../../components/HeeboText';

const AcceptButton = ({ handleAccept }) => {
    const { handleSubmit } = useForm();

    return (
        <View style={styles.centeredView}>
            <Button transparent style={styles.buttonStyle} onPress={handleSubmit(handleAccept)}>
                <Icon style={styles.icon} name='like2' type={'AntDesign'} />
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    icon:{
        color: '#05A61A'
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
});

export default AcceptButton;