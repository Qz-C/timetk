import React, {FC} from 'react';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';
import { AnimatedCircularProgress } from 'react-native-circular-progress' 

const CurrentTaskCard:FC = () => {
    return(
        <View style={style.container}>
            <View style={style.top}>
                <Text style={style.timer}>
                    00:32:10
                </Text>
                <TouchableHighlight>
                    <Icon name="chevron-right" size={24} color="#FFFFFF"/>
                </TouchableHighlight>       
            </View>
            <View style={style.bottom}>
                <AnimatedCircularProgress
                    size={16}
                    width={1}
                    fill={75}
                    tintColor="#9B51E0"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#E2D0F3"
                />
                <Text style={style.taskTitle}>
                    Rasion Project
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#070417',
        borderRadius: 12,
        padding: 20
    },
    top:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    timer:{
        color: '#ffffff',
        fontFamily: "Rubik-Medium",
        fontSize: 32
    },
    bottom:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    taskTitle:{
        marginLeft: 5,
        color: '#ffffff',
        fontFamily: "Rubik-Regular",
        fontSize: 16
    }
});



export default CurrentTaskCard;