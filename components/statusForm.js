import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import {
    Body,
    Button,
    Card,
    CardItem,
    Form,
    Icon,
    Input,
    Item,
    Label,
} from 'native-base';

import { Formik } from 'formik';
import LoginDriverForm from './loginDriverForm';
import { LoginFormStyles } from '../styles/loginFormStyles'
import { loadAsync } from 'expo-font';

const styles = StyleSheet.create({
    cardStyle: { width: '80%', },
    cardForm: { width: '100%', },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 40 },
    text: { textAlign: 'center' },
    infoButton:{ justifyContent: 'center'}
});

const tableTitles = ['שם', 'טלפון', 'פרטים', 'סטטוס'];
const infoButton = (<Button style={styles.infoButton} transparent>
    <Icon name='md-information-circle'/>
</Button>)
const tableData = [
    ['רזי', '0525217550', infoButton, 'לא אושר'],
    ['רזי', '0525217550', infoButton, 'לא אושר'],
    ['רזי', '0525217550', infoButton, 'לא אושר'],
]

export default function StatusForm() {
    return (
        <Card style={styles.cardStyle}>
            <CardItem style={styles.cardForm}>
                <Form style={styles.cardForm}>
                    <Table borderStyle={{ borderWidth: 0 }}>
                        <Row data={tableTitles} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                        <TableWrapper style={styles.wrapper}>
                            <Rows data={tableData} flexArr={[1, 2, 1, 1]} style={styles.row} textStyle={styles.text} />
                        </TableWrapper>
                    </Table>
                </Form>
            </CardItem>
        </Card>
    );
};
