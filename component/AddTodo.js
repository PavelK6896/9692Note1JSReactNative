import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export const AddTodo = ({addTodo}) => {
    const [value, setValue] = useState('')
    const [placeholder, setPlaceholder] = useState('todo')

    const pressHandler = (event) => {
        if (value.trim()) {
            addTodo(value)
            setValue('')
            setPlaceholder('todo')
        } else {
            // Alert.alert('no todo')
            setPlaceholder('no todo')
        }
    }

    const pressHandlerKey = (event) => {
        if (event.nativeEvent.key === "Enter") {
            pressHandler()
        }
    }

    return (
        <View style={styles.View}>
            <TextInput
                style={styles.TextInput}
                onChangeText={setValue}
                value={value}
                placeholder={placeholder}
                autoCorrect={false} // no t9
                autoCapitalize='none' // no upper b
                onKeyPress={pressHandlerKey}
                // keyboardType={'numeric'}
            />
            <Button style={styles.Button}
                    title={"добавить"}
                    onPress={pressHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15

    },
    TextInput: {
        padding: 10,
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#156987',
    },
    Button: {}
})
