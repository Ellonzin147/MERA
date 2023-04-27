import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function Total(){
    return(
        <View style={style.container}>
            <Text style={style.top}>
                Total R$:
            </Text>
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
        bottom: 30,
        width: 205,
        left: 14,
        padding: 8,
        fontWeight: 'bold'
    },
    input:{
        padding: 8,
        borderRightWidth: 1,
        backgroundColor: '#fff',
        bottom: 64,
        width: 76,
        left: 143
    },
    container:{
        bottom: 45
    }
})