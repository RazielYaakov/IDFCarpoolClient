import React from 'react';
import { View ,Text, StyleSheet} from 'react-native';

export default function RequestPage() {
    return (
        <View style={styles.container}>
            <Text>request</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop: 20,
    }
  });
  