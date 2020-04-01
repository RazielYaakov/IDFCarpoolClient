import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function StatusPage() {
    return (
        <View style={styles.container}>
            <Text>status</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop: 20,
    }
  });
  