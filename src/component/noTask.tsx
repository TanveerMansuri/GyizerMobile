import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import unit from '../res/units';
import colors from '../res/colors';

const { scale } = unit;

const NoTask = () => {
    return (
        <View style={styles.container}>
            <View style={styles.separator}/>
            <Text style={styles.text}>No tasks</Text>
            <View style={styles.separator}/>
        </View>
    )
}

export default NoTask

const styles = StyleSheet.create({
    container: {
        marginTop: scale(70),
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        height: scale(5),
        width: scale(70),
        borderRadius:scale(3),
        backgroundColor: colors.secondary, // Separator color
    },
    text: {
        color: colors.white,
        marginVertical: scale(12),
        fontWeight: '400',
        fontSize: scale(24)
    }
})