import { Button, Icon } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Row, Rows, Table } from 'react-native-table-component';

const styles = StyleSheet.create({
  Icon: {
    marginHorizontal: 20,
    color: '#4b4b4b',
  },
  infoButton: { justifyContent: 'center', color: 'blue' },
  wrapper: { flexDirection: 'row' },
  head: { height: 40, marginHorizontal: 10 },
  text: { textAlign: 'center', fontFamily: 'Heebo',  fontSize: 15 },
  titleText: { textAlign: 'center', fontFamily: 'Heebo-Bold', fontSize: 17},
  row: { height: 50, marginHorizontal: 10, borderTopWidth: 1 },

});

const infoButton = (<Button style={styles.infoButton} transparent>
  <Icon name='md-information-circle' style={{color: 'black'}}/>
</Button>)

const tableTitles = ['שם', 'טלפון', 'מידע', 'סטטוס'];
const tableData = [
  ['רזיאל יעקב', '0525217550', infoButton, 'תבקש מהנהג'],
  ['יוסי ראיקו', '0529257642', infoButton, 'הנהג מחכה לך'],
  ['רזיאל יעקב', '0525217550', infoButton, 'תבקש מהנהג'],
  ['יוסי ראיקו', '0529257642', infoButton, 'הנהג מחכה לך'],
  ['רזיאל יעקב', '0525217550', infoButton, 'תבקש מהנהג'],
  ['יוסי ראיקו', '0529257642', infoButton, 'הנהג מחכה לך'],
  ['יוסי ראיקו', '0529257642', infoButton, 'הנהג מחכה לך'],
  ['רזיאל יעקב', '0525217550', infoButton, 'תבקש מהנהג'],
  ['יוסי ראיקו', '0529257642', infoButton, 'הנהג מחכה לך'],
  ['רזיאל יעקב', '0525217550', infoButton, 'תבקש מהנהג'],
  ['יוסי ראיקו', '0529257642', infoButton, 'הנהג מחכה לך'],
]

const RidesList = () => {
  return (
    <Table borderStyle={{ borderWidth: 0 }}>
      <Row data={tableTitles} flexArr={[1.5, 1.5, 1, 1.5]} style={styles.head} textStyle={styles.titleText} />
      <Rows data={tableData} flexArr={[1.5, 1.5, 1, 1.5]} style={styles.row} textStyle={styles.text} />
    </Table>
  );
};

export default RidesList;