import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AssistantText, HebboText} from './text/HebboText';
import styled from 'styled-components';

export default function Header() {
  return (
    <View style={styles.container}>
      <TextHeader isBold={false} >אי די אף קארפול</TextHeader>
    </View>
  );
}

const TextHeader = styled(AssistantText)`
    font-size: 4em;
`;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 20,
    backgroundColor: 'cornflowerblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
