import React from 'react-native'
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function Cont(){
    return(
        <View>
            <View>
                <Text style={style.top}>
                    CPF/CNPJ
                </Text>
            </View>
            <View>
                <TextInput style={style.input}
                keyboardType='numeric'
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    top:{
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 5,
        bottom: 37.1,
        width: 100,
        left: 15
    },
    input:{
        width: 286,
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        left: 114,
        bottom: 65.6
    }
})