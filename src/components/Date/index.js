import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function Date(){
    return(
        <View>
            <Text style={style.top}>
                Data:
            </Text>
            <View>
                <TextInput style={style.input}/>
            </View>
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
        bottom: 143,
        fontWeight: 'bold'
    },
    input:{
        padding: 8,
        backgroundColor: '#fff',
        width: 90,
        bottom: 176.5,
        left: 300,
    }
})