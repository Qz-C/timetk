import React, { FC } from 'react';

import {
    StyleSheet,
    TouchableHighlight,
    View
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomBar: FC = () => {


    return (
        <View style={style.container}>

            <TouchableHighlight>
                <Icon name="query-builder" size={28} color='#070417' />
            </TouchableHighlight>

            <TouchableHighlight>
                <Icon name="add-circle" size={44} color='#070417' />
            </TouchableHighlight>

            <TouchableHighlight>
                <Icon name="insert-chart-outlined" size={28} color='#070417' />
            </TouchableHighlight>

        </View>


    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 50,
    }
});



export default BottomBar;