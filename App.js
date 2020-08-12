import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, FlatList} from 'react-native';
import {Navbar} from "./component/Navbar";
import {AddTodo} from "./component/AddTodo";
import {Todo} from "./component/Todo";

export default function App() {
    const [state, setState] = useState([
        {id: 1,title: 'sss' },
        // {id: 2,title: 'sss' },
        // {id: 3,title: 'sss' },
        // {id: 4,title: 'sss' },
        // {id: 5,title: 'sss' },
        // {id: 6,title: 'sss' },
        // {id: 7,title: 'sss' },
        // {id: 8,title: 'sss' },
        // {id: 9,title: 'sss' },
        // {id: 12,title: 'sss' },
        // {id: 14,title: 'sss' },
        // {id: 15,title: 'sss' },
        // {id: 16,title: 'sss' },
        // {id: 17,title: 'sss' },
    ])

    const addTodo = (title) => {
        setState([...state, {
            id: Date.now().toString(),
            title,
        }])
        // setState(prev => [...prev, {
        //     id: Date.now().toString(),
        //     title,
        // }])
    }


    const removeTodo = (id) => {
        setState(prev => prev.filter(todo => todo.id !== id))

    }


    return (
        <View>
            <Navbar title={"todo app"}></Navbar>
            <View style={styles.container}>
                <AddTodo addTodo={addTodo}/>

                <FlatList
                    data={state}
                    renderItem={({item}) => {
                        return <Todo todo={item} removeTodo={removeTodo}/>
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginBottom: 250,
    },
});
