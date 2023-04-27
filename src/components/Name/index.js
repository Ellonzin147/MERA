import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function Name(){
    return(
        <View style={style.container}>
            <View style={style.top}>
            <Text>
                Nome:
            </Text>
            </View>
            <TextInput style={style.input}/>
        </View>
    )
}

const style = StyleSheet.create({
    top:{
        borderWidth: 1,
        padding: 8,
        margin: 30,
        backgroundColor: '#fff',
    },
    input:{
        backgroundColor: '#fff',
        borderRightWidth: 1,
        width: 300,
        left: 85,
        bottom: 64,
        padding: 8
    },
    container:{
        top: 20
    }
})