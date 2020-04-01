import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'native-base';

export default function StatusForm() {
    return (
        <Card style={styles.cardStyle}>
        </Card>
    );
};

const styles = StyleSheet.create({
    cardStyle: { width: '90%', opacity: 0.7 },
});