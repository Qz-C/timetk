import React, {FC} from 'react';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

import TaskCard from "../taskCard"

const TaskItems:FC = () => {
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.title}>Today</Text>
                <TouchableHighlight>
                    <Text style={style.seeAllButton}>See All</Text>
                </TouchableHighlight>     
            </View>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title:{
        fontFamily: 'Rubik-Medium',
        color: "#070417",
        fontSize: 20
    },
    seeAllButton:{
        fontFamily: 'Rubik-Regular',
        color: "#070417",
        fontSize: 16
    }
});




export default TaskItems;