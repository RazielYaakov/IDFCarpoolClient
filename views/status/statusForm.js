import { Button, Card, CardItem, Form, Icon } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Row, Rows, Table, TableWrapper } from 'react-native-table-component';

const styles = StyleSheet.create({
    cardStyle: { width: '90%', opacity: 0.7 },
    cardForm: { width: '100%', },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 40 },
    text: { textAlign: 'center' },
    infoButton:{ justifyContent: 'center', color: 'blue'}
});

const tableTitles = ['שם', 'טלפון', 'פרטים', 'סטטוס'];
const infoButton = (<Button style={styles.infoButton} transparent>
    <Icon name='md-information-circle'/>
</Button>)
const tableData = [
    ['רזיאל יעקב', '0525217550', infoButton, 'לא אושר'],
    ['יוסי ראיקו', '0529257642', infoButton, 'אושר'],
]

export default function StatusForm() {
    return (
        <Card style={styles.cardStyle}>
            <CardItem style={styles.cardForm}>
                <Form style={styles.cardForm}>
                    <Table borderStyle={{ borderWidth: 0 }}>
                        <Row data={tableTitles} flexArr={[2, 2, 2, 1]} style={styles.head} textStyle={styles.text} />
                        <TableWrapper style={styles.wrapper}>
                            <Rows data={tableData} flexArr={[2, 2, 2, 1]} style={styles.row} textStyle={styles.text} />
                        </TableWrapper>
                    </Table>
                </Form>
            </CardItem>
        </Card>
    );
};
