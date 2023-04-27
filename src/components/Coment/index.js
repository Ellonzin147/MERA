import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function Coment(){
    return(
        <View>
            <Text style={style.coment}>
                Defeito/Reclamação
            </Text>
            <View>
                <TextInput style={style.input}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    coment:{
        backgroundColor: '#d3d3d3',
        borderWidth: 1,
        fontWeight: 'bold',
        textAlign: "center",
        width: 387,
        left: 14,
        padding: 5
    },
    input:{
        borderWidth:1,
        backgroundColor: '#fff',
        padding: 8,
        width: 387,
        left: 14
    }
})