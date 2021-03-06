import React, { FC } from 'react';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import CurrentTaskCard from "../components/currentTaskCard"
import TaskItems from "../components/taskItems"
import BottomBar from "../components/bottomBar";

const Home: FC = () => {

    return (
        <View style={styles.container}>

            <View style={styles.topMenu}>
                <Text style={styles.title}> Task </Text>
                <TouchableHighlight>
                    <Icon name="more-horiz" size={24} color="#828282" />
                </TouchableHighlight>
            </View>

            <CurrentTaskCard />
            <TaskItems />
            <BottomBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FAFAFF',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    topMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: "Rubik-Medium",
        color: '#070417',
        fontSize: 24
    }
})

export default Home;
