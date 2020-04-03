import React from 'react';
import {Body, Icon, Left, List, ListItem, Right, Text} from 'native-base';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Icon: {
    marginHorizontal: 20,
    color: '#4b4b4b',

  },
  Text: {
    textAlign: 'right',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const RideRow = ({}) => {
  return (
      <ListItem avatar>
        <Right>
          <Text note>13:43</Text>
        </Right>
        <Body>
          <Text>עומרי אנגל</Text>
          <Text note>אוהבי בנים
            .</Text>
        </Body>
        <Left>
          <Icon style={styles.Icon} name={'car'} type={'AntDesign'}/>
        </Left>

      </ListItem>
  );
};

export default RideRow;