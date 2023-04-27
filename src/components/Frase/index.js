import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function Frase(){
    return(
        <View style={style.container}>
            <Text style={style.sob}>Sobre Nós:</Text>
            <Text style={style.frase}>Nós somos uma equipe especializada em Gerenciamente de manutenção, dedicada a garantir que as operações de nossos clientes funcionem sem interromper desnecessárias. nossa equipe está bem equipada para fornecer soluções de manutenção proativas e reativas que maximizam a eficiência operacional</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#87cefa',
        height: 250,
        margin: 30,
        borderRadius: 10
    },
    sob:{
        fontWeight: 'bold',
        fontSize: 25,
        top: 30,
        left: 20
    },
    frase:{
        fontSize: 15,
        margin: 20,
        top: 20
    }
})