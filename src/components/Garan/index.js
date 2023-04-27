import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function Garan(){
    return(
        <View>
            <View>
                <Text style={style.top}>Garantia:</Text>
            </View>
            <View>
                <TextInput style={style.input}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    top:{
        borderWidth: 1,
        backgroundColor: '#fff',
        top: 20,
        width: 205,
        left: 14,
        padding: 8,
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#fff',
        padding: 8,
        width: 119,
        left: 100,
        bottom: 14,
        borderRightWidth: 1
    }
})