import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import color from '../res/colors';
import unit from '../res/units';

interface Iprops {
    onYesPress: () => void;
    onNoPress: () => void;
}

const { scale } = unit;

const Delete: React.FC<Iprops> = (props) => {

    const {
        onYesPress,
        onNoPress
    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.background} />
            <View style={styles.popup}>
                <Text style={styles.deleteText}>Delete this task?</Text>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={onYesPress}>
                        <Text style={styles.buttonText}>Yes</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={onNoPress}>
                        <Text style={styles.buttonText}>No</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Delete;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: color.primary,
        opacity: 0.4,
    },
    popup: {
        backgroundColor: color.primaryLight,
        width: '90%',
        height: scale(150),
        padding: scale(20),
        borderRadius: scale(10),
        borderTopWidth: scale(5),
        borderColor: color.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: scale(40)
    },
    deleteText: {
        fontSize: scale(18),
        color: color.white,
        fontWeight: '400',
        lineHeight: scale(18)
    },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: scale(40)
    },
    button: {
        height: scale(24),
        width: scale(65),
        borderWidth: 1,
        borderColor: color.secondaryLight,
        borderRadius: scale(4),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: scale(10),
        color: color.white,
        fontWeight: '400',
        lineHeight: scale(18)
    }
})