import React from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components';
import { AssistantText } from './HeeboText';

export default function Header() {
  return (
    <View style={styles.container}>
      <TextHeader isBold={false} >IDF Carpool</TextHeader>
    </View>
  );
}

const TextHeader = styled(AssistantText)`
    font-size: 4em;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'cornflowerblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
