import React from "react";
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default function Print() {
    return(
        <View>
            <Icon name="printer" style={style.icon}/>
        </View>
    )
}

const style = StyleSheet.create({
    icon:{
        fontSize: 30,
        bottom: 70,
        left: 350
    }
})