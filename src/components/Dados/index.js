import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function Dados(){
    return(
        <View style={style.container}>
            <View style={style.top}>
            <Text style={{right: 20, bottom: 20}}>
                Dados:
            </Text>
            </View>
            <TextInput style={style.input}/>
        </View>
    )
}

const style = StyleSheet.create({
    top:{
        borderWidth: 1,
        padding: 30,
        margin: 30,
        backgroundColor: '#fff'
    },
    input:{
        backgroundColor: '#fff',
        padding: 30,
        margin: 30,
        borderRightWidth: 1,
        width: 300,
        left: 54,
        bottom: 138
    },
    container:{
        bottom: 40
    }
})