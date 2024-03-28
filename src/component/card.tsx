import React from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../res/colors';
import unit from '../res/units';
import images from '../assets/img/images';

const { scale } = unit;

const { Add, Edit } = images;

interface Iprops {
    item?: any;
    gap?: number;
    leftIcon?: JSX.Element;
    edit?: boolean;
    selectedTaskId?: number | null;
    onPress?: () => void;
    onEditPress?: () => void;
    onDeletePress?: () => void;
}
const Card: React.FC<Iprops> = (props) => {
    const {
        item,
        gap,
        leftIcon,
        edit,
        selectedTaskId,
        onPress,
        onEditPress,
        onDeletePress
    } = props;

    return (
        <>
            <Pressable style={[styles.container, { marginTop: scale(gap) * 4 }]}
                onPress={onPress}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.about}>{item.about}</Text>
                </View>
                <TouchableOpacity style={styles.crossIcon} onPress={onDeletePress}>
                    <Image
                        style={styles.crossImage}
                        source={Add()}
                    />
                </TouchableOpacity>
            </Pressable>
            {
                edit && selectedTaskId === item.id &&
                <View style={styles.edit}>
                    <TouchableOpacity style={styles.ediIcon}>
                        <Text style={{
                            color: color.tertiary,
                            fontSize: scale(16),
                            fontWeight: "700"
                        }}>i</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.ediIcon, { marginLeft: scale(8) }]} onPress={onEditPress}>
                        <Image
                            style={styles.editImage}
                            source={Edit()}
                        />
                    </TouchableOpacity>
                </View>
            }

        </>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: scale(75),
        flexDirection: 'row',
        borderRadius: scale(8),
        borderWidth: scale(2),
        padding: scale(10),
        borderColor: color.secondaryLight,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        justifyContent: 'space-between',
        marginTop: scale(4),
    },
    title: {
        fontSize: scale(22),
        color: color.tertiary,
        fontWeight: '500',
        lineHeight: scale(28)
    },
    about: {
        color: color.tertiary,
        fontWeight: '500',
        lineHeight: scale(16),
        marginTop: scale(2)
    },
    crossIcon: {
        height: scale(35),
        width: scale(35),
        borderWidth: scale(2),
        borderColor: color.secondaryLight,
        borderRadius: scale(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scale(8)
    },
    crossImage: {
        height: scale(10),
        width: scale(10),
        transform: [{ rotate: "45deg" }]
    },
    edit: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: scale(8)
    },
    ediIcon: {
        height: scale(35),
        width: scale(35),
        borderWidth: scale(1),
        borderColor: color.secondaryLight,
        borderRadius: scale(6),
        justifyContent: 'center',
        alignItems: 'center',
    },
    editImage: {
        height: scale(16),
        width: scale(16),
    }
});