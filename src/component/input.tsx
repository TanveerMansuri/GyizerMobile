// import color from '../res/colors';
import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import unit from '../res/units';
import colors from '../res/colors';

interface PropsI extends TextInputProps {
    onChangeText?: (text: any) => void;
    onChangeDate?: (text: any) => void;
    onHandleClear?: () => void;
    onVerifiedClick?: () => void;
    onClickOption?: () => any;
    onPressRightText?: () => void;
    onClickRightIcon?: any;

    containerStyle?: object;
    inputContainer?: object;
    style?: object;
    textButton?: boolean;
    textButtonPressed?: () => void;
    showCancelText?: boolean;
    isVerified?: boolean;
    editable?: boolean;
    textInputHeading?: string;
    textInputHeadingRight?: string;
    alignItems?: string;
    info?: string;
    isRightIcon?: boolean;
    forwardedRef?: any;
    rightComponent?: any;
    leftComponent?: any;
    textRecurringPeriod?: string;
    onPressRightComponent?: any;
    textInputHeadingRightStyle?: any;
    vwLeftComponentStyle?: any;
    onPress?: () => void;
}

const { scale } = unit;
const Input: React.FC<PropsI> = (props) => {

    const handleChangeText = (text: string) => {
        //setValue(text);
        if (props.onChangeText) {
            props.onChangeText(text);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    {...props}
                    ref={props.forwardedRef}
                    style={{
                        ...styles.input,
                        ...props.style,
                    }}
                    placeholder={props.placeholder ? props.placeholder : ''}
                    editable={props.editable}
                    selectionColor={colors.secondaryLight}
                    placeholderTextColor='#F0E3CA'
                    
                    secureTextEntry={props.secureTextEntry}
                    onChangeText={(e: any) => handleChangeText(e)}
                />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        height: scale(40),      
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputContainer: {
        width:"100%",
    },
    input: {
        height: scale(35),
        fontSize: scale(14),
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: scale(4),
        padding: scale(8),
        color: colors.tertiary
      },
})