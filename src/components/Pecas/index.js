import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function Pecas(){
    return(
        <View>
            <Text style={style.top}>
                Peças R$:
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    top:{
        padding: 8,
        borderWidth: 1,
        backgroundColor: '#fff',
        width: 185,
        left: 215,
        bottom: 98,
        fontWeight: 'bold'
    }
})