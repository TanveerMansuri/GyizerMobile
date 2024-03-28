import React, { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../../res/colors';
import unit from '../../res/units';
import Input from '../../component/input';
import NoTask from '../../component/noTask';
import Card from '../../component/card';
import gyizerData from '../../JSON/gyizerData.json';
import images from '../../assets/img/images';
import Delete from '../../component/dialogue';

const { scale } = unit;
const { Add } = images;


const DashboardContainer = () => {

    const [state, setState] = useState({
        title: '',
        about: '',
        tasks: gyizerData,
        selectedTaskId: 0,
        editBox: false,
        dialogue: false
    });

    const {
        title,
        about,
        tasks,
        selectedTaskId,
        editBox,
        dialogue
    } = state;

    const _renderItems = ({ item }: any) => {
        return (
            <Card item={item} gap={4}
                edit={true}
                selectedTaskId={selectedTaskId}
                onPress={() => setState({ ...state, selectedTaskId: item.id })}
                onEditPress={() => onEditPress(item.id)}
                onDeletePress={() => setState({ ...state, selectedTaskId: item.id, dialogue: true })}
            />
        );
    }
    const handleAddTask = () => {
        if (title && about) {
            const newTask = {
                id: tasks.length + 1,
                title,
                about,
            };
            setState(prevState => ({ ...prevState, title: '', about: '', tasks: [...prevState.tasks, newTask] }));
        }
    };

    const handleRemoveTask = (taskId: number) => {
        setState(prevState => ({ ...prevState, tasks: prevState.tasks.filter((task: any) => task.id !== taskId), dialogue: false }));
        setState(prevState => ({
            ...prevState,
            tasks: prevState.tasks.map((task: any, index: number) => ({
                ...task,
                id: index + 1
            }))
        }));
    };

    const onSavePress = () => {
        const taskIndex = tasks.findIndex(task => task.id === selectedTaskId);
        if (taskIndex !== -1) {
            const updatedTasks = [...tasks];
            updatedTasks[taskIndex].title = title;
            updatedTasks[taskIndex].about = about;
            setState(prevState => ({
                ...prevState,
                tasks: updatedTasks,
                editBox: false,
                title: '',
                about: ''
            }));
        }
    };
    const onNoPress = () => {
        setState({ ...state, dialogue: false, editBox: false })
    };

    const onEditPress = (taskId: number) => {
        const editedTask = tasks.find((task: any) => task.id === taskId);
        if (editedTask) {
            setState(prevState => ({
                ...prevState,
                selectedTaskId: taskId,
                title: editedTask.title,
                about: editedTask.about,
                editBox: true,
                dialogue: false
            }));
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={{ flex: 1 }}>
                    <Input
                        placeholder='Title...'
                        onChangeText={text => setState({ ...state, title: text })}
                        value={title}
                    />
                    <Input
                        placeholder='About...'
                        onChangeText={text => setState({ ...state, about: text })}
                        value={about}
                    />
                </View>

                <TouchableOpacity style={styles.addIcon} onPress={() => handleAddTask()}>
                    <Image
                        style={styles.addImage}
                        source={Add()}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginHorizontal: scale(24) }}>
                {
                    gyizerData.length > 0 ?
                        <FlatList
                            data={tasks}
                            renderItem={_renderItems}
                            keyExtractor={(item) => item.id.toString()}
                        />
                        :
                        <NoTask />
                }
            </View>
            {dialogue && <Delete onYesPress={() => handleRemoveTask(selectedTaskId)} onNoPress={onNoPress} />}
            {editBox && <View style={{
                ...StyleSheet.absoluteFillObject,
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                <View style={styles.background} />
                <View style={styles.popup}>

                    <View style={{ width: '100%' }}>
                        <Input
                            placeholder='Title...'
                            onChangeText={text => setState({ ...state, title: text })}
                            value={title}
                        />
                        <Input
                            placeholder='About...'
                            onChangeText={text => setState({ ...state, about: text })}
                            value={about}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button} onPress={onNoPress}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText} onPress={() => onSavePress()}>Save</Text>
                        </Pressable>
                    </View>
                </View>
            </View>}
        </View>
    )
}

export default DashboardContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primary,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: scale(24),
        marginTop: scale(14)
    },
    addIcon: {
        height: scale(75),
        width: scale(75),
        borderWidth: scale(2),
        borderColor: color.secondary,
        borderRadius: scale(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scale(8)
    },
    addImage: {
        height: scale(24),
        width: scale(24),
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
    background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: color.primary,
        opacity: 0.4,
    },
    popup: {
        backgroundColor: color.primaryLight,
        width: '90%',
        alignItems: 'center',
        padding: scale(18)
    },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: scale(10)
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