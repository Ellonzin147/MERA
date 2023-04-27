import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Header from '../../components/Header'
import Dados from '../../components/Dados'
import Name from '../../components/Name'
import Select from '../../components/Select'

export default function CadMaq({navigation}){
    return(
        <View>
            <Header/>
            <View>
                <Text style={style.title}>Cadastro De Maquinas</Text>
            </View>
            <Select/>
            <Name/>
        <Dados/>
        
        <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Maquinario')}>
                    <Text style={{color: '#fff'}}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        top: 10,
        fontSize: 20
    },
    btn:{
        backgroundColor: '#4682b4',
        borderRadius: 5,
        alignItems: "center",
        width: 150,
        left: 125,
        bottom: 150
    }
})