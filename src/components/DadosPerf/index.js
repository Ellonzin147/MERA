import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function DadosPerf(){
    return(
        <View>
            <Text style={style.title}>
                Dados
            </Text>
        <View style={style.container}>
            <View style={style.profile}/>
                <Text style={{color: '#fff', fontSize: 20, left: 39}}>Nome</Text>
        </View>
        <View style={style.data}>
                <Text>E-mail: nome@gmail.com</Text>
                <Text>Telefone: (00)99999999</Text>
                <Text>CPF: 111111111</Text>
                <Text>Endereço: Av. Saburo Kameyama </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#87cefa',
        margin: 15,
        borderRadius: 10,
        height: 200,
        top: 10
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "center",
        top: 10
    },
    profile:{
        backgroundColor: '#d3d3d3',
        width: 100,
        height: 100,
        margin: 20,
        borderRadius: 50
    },
    data:{
        left: 170,
        bottom: 150,
        
    }
})