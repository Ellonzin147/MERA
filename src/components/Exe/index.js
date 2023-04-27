import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function Exe(){
    return(
        <View>
            <View>
                <Text style={style.top}>
                    Serviços Executado no Local
                </Text>
            </View>
            <View>
                <TextInput style={style.input}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    top:{
        backgroundColor: '#d3d3d3',
        padding: 5,
        borderWidth: 1,
        width: 387,
        left: 14,
        fontWeight: 'bold',
        textAlign: "center"
    },
    input:{
        backgroundColor: '#fff',
        padding: 50,
        borderWidth: 1,
        width: 387,
        left: 14
    }
})