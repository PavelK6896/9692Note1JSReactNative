import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const Todo = (props) => {

    const pressHandler = (event) => {
        console.log(event)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={pressHandler}
            // onLongPress={() => props.removeTodo(props.todo.id)}
            onLongPress={props.removeTodo.bind(this, props.todo.id)}
        >
            <View style={styles.View}>
                <Text>{props.todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    View: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#558413',
        borderRadius: 5,
        marginBottom: 15
    }
})
