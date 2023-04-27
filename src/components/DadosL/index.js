import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'

export default function DadosL(){
    return(
        <View style={style.container}>
            <Image source={require('../../../assets/tec.png')} style={style.img}/>
            <Text style={style.name}>Lucas</Text>
            <View style={style.dados}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Dados</Text>
            </View>
            <View style={style.data}>
                <Text>E-mail: lucas@gmail.com</Text>
                <Text>Telefone: (00)99999999</Text>
                <Text>Curso de Nr10 Elétrica </Text>
                <Text>vencimento 11/03/2025</Text>
                <Text>Curso de Nr35 Altura Azu</Text>
                <Text>vencimento 17/07/2025</Text>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#87cefa',
        margin: 10,
        marginTop: 20,
        height: 300,
        borderRadius: 10
    },
    img:{
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 20
    },
    name:{
        left: 47,
        bottom:10,
        color: '#fff',
        fontSize: 20
    },
    dados:{
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 140,
        left: 60
    },
    data:{
        left: 180,
        bottom: 110
    }
})