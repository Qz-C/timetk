import React, { FC } from 'react';

import {
    StyleSheet,
    TouchableHighlight,
    Text,
    View
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import CurrentTaskCard from "../components/currentTaskCard"
import TaskItems from "../components/taskItems"
import BottomBar from "../components/bottomBar";

const Home: FC = () => {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.slider}></View> 
                <View></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FAFAFF',
        justifyContent: 'space-between',
        paddingTop: 50,
    },
    content: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center'

    },
    slider: {
        backgroundColor: '#E9E9FF',
        width: 40,
        height: 4,
        marginTop: 10
    }
})

export default Home;
