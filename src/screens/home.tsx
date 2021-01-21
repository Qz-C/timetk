import React, {FC} from 'react';

import {
    StyleSheet,
    Text,
    View
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

const Home:FC = () => {
    return(
        <View style={styles.container}>
            <View style={styles.topMenu}>
                <Text style={styles.title}> Task </Text>
                <Icon name="more-vert" size={24} color="#828282"/>
            </View>
            <View style={styles.ongoingTask}>

            </View>
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
        fontFamily: "Rubik-Bold", 
        color:'#070417',
        fontSize: 24
    },
    ongoingTask:{

    },
    todayTasks:{

    },
    bottomMenu:{

    }

})

export default Home;
 