import React from 'react';
import {
  Content,
  Body,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Button,
} from 'native-base';
import {StyleSheet, View} from 'react-native';
import moment from 'moment';

const styles = StyleSheet.create({
  Icon: {
    marginRight: 15,
    color: '#4b4b4b',

  },
  Content: {
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    flex: 1,
  },
  resetButton: {
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  Text: {
    textAlign: 'right',
  },
  button: {
    width: 50,
    height: 50,
  },
  hour: {
    fontSize: 14,
    marginBottom: 10,
  },
  Body: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
});

const AvailableRidesList = ({rides, emptyRides}) => {
  return (
      <Content style={styles.Content}>
        <List style={styles.list}>
          {rides.map(i =>
              <ListItem avatar key={i.rideId}>
                <Right>
                  <Text style={styles.hour}> {moment(i.dateTime).
                      format('HH:mm')}</Text>
                </Right>
                <Body style={styles.Body}>
                  <View>
                    <Text>{i.driver.name}</Text>
                    <Text note>{i.driver.phoneNumber.length < 7 ?
                        '0547265611' :
                        i.driver.phoneNumber}</Text>
                  </View>
                  <View>
                    <Button transparent onPress={() => {console.log('something somethine')}}>
                      <Text>הצטרף</Text>
                    </Button>
                  </View>
                </Body>
                <Left>
                  <Icon style={styles.Icon} name={'car'} type={'AntDesign'}/>
                </Left>
              </ListItem>)}
        </List>
        <View style={styles.resetButton}>
          <Button transparent onPress={emptyRides}><Text>חפש
            מחדש</Text></Button>
        </View>
      </Content>
  );
};

export default AvailableRidesList;

