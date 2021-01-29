import React, {FC} from 'react';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import CurrentTaskCard from "../components/currentTaskCard/index"
import TaskItems from  "../components/taskItems/index"

const Home:FC = () => {

    return(
        <View style={styles.container}>
            <View style={styles.topMenu}>
                <Text style={styles.title}> Task </Text>
                <TouchableHighlight>
                    <Icon name="more-horiz" size={24} color="#828282"/>
                </TouchableHighlight>
            </View>
            
            <CurrentTaskCard/>
            <TaskItems/>
            <View style={styles.todayTasks}>

            </View>
            <View style={styles.bottomMenu}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFF',
        width: '100%',
        padding: 20
    },
    topMenu:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:{
        fontFamily: "Rubik-Medium", 
        color:'#070417',
        fontSize: 24
    },
    todayTasks:{

    },
    bottomMenu:{

    }

})

export default Home;
 