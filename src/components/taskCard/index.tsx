import React, {FC} from 'react';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import {Chip} from "material-bread";

const TaskCard:FC = () => {
    return(
        <View style={style.container}>
            <View style={style.topContainer}>
                <View style={style.icon}>
                    <Icon name="desktop-mac" size={25} color="#ffffff"/>
                </View>
                <View style={style.info}>
                    <Text style={style.title}>Ui Design</Text>
                    <View style={style.chips}>
                        <Chip  
                            text="Work"
                            visible={true}
                            color='#FFEFF1'
                            radius={6}
                            style={{padding:5, marginRight:5}}
                        >
                            <Text style={{fontSize: 12, fontFamily: "Rubik-Regular", color:"#FD5B71"}}> Work </Text>
                        </Chip>

                        <Chip  
                            text="Work"
                            visible={true}
                            color='#F5EEFC'
                            radius={6}
                            style={{padding:5}}
                        >
                            <Text style={{fontSize: 12, fontFamily: "Rubik-Regular", color:"#9B51E0"}}> Rasion Project </Text>
                        </Chip>
                        
                    </View>
                </View>
            </View>
           
            <View>
                <View style={style.panel}>
                    <Text style={style.timer}> 00:42:21 </Text>
                    <TouchableHighlight>
                        <Icon name="play-arrow" size={30} color="#828282"/>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 15,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        borderRadius: 12,
        padding: 10,
        justifyContent: "space-between",
    },
    topContainer: {
        flexDirection: 'row'
    },
    icon:{
        backgroundColor: "#9B51E0",
        padding: 20,
        borderRadius: 50
    },
    info:{
        marginLeft: 10,
        justifyContent: "space-around"
    },
    title:{
        color:"#000000",
        fontFamily:"Rubik-Medium",
        fontSize:14
    },
    chips:{
        flexDirection: "row"
    },
    panel:{
        alignItems: "flex-end",
        justifyContent: "space-around",

    },
    timer:{
        color:"#4F4F4F",
        fontFamily: "Rubik-Regular",
        fontSize:12
    }
});




export default TaskCard;