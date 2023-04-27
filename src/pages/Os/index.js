import React from "react";
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native'
import Header from "../../components/Header";
import Cont from "../../components/Cont";
import Coment from "../../components/Coment";
import Exe from "../../components/Exe";
import Garan from "../../components/Garan";
import Rev from "../../components/Rev";
import Pag from "../../components/Pag";
import Pecas from "../../components/Pecas";
import Total from "../../components/Total";
import Date from "../../components/Date";
import Assinatura from "../../components/Assinatura";
import Icon from "../../components/Print";

export default function Os(){
    return(
        <ScrollView>
            <Header/>
            <View>
                <Text style={style.title}>
                    MERA
                </Text>
            </View>
            <View>
                <Text style={style.top}>
                Serviço de Manutenção em Maquinas 
                </Text>
                <Text style={style.top2}>
                    OS N°
                </Text>
            </View>
            <View>
                <Text style={style.top3}>
                    Cliente
                </Text>
            </View>
            <View>
            <TextInput
                    style={style.input}
                />
            </View>
            <View>
                <Text style={style.top4}>
                    Telefone
                </Text>
            </View>
            <View>
                <TextInput style={style.input2} 
                    keyboardType="numeric"
                />
            </View>
            <View>
                <Text style={style.top5}>
                    Endereço
                </Text>
            </View>
            <View>
                <TextInput style={style.input3}/>
            </View>
            <Cont/>
            <Coment/>
            <Exe/>
            <Garan/>
            <Rev/>
            <Pag/>
            <Pecas/>
            <Total/>
            <Date/>
            <Assinatura/>
            <Icon/>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    title:{
        justifyContent: "center",
        textAlign: "center",
        top: 50,
        fontSize: 20,
        fontWeight: 'bold'
    },
    top:{  
        backgroundColor: '#d3d3d3',
        borderWidth: 1,
        width: 300,
        padding: 5,
        top: 80,
        left: 15,
        fontWeight: 'bold'
    },
    top2:{
        backgroundColor: '#d3d3d3',
        top: 51,
        padding: 5,
        left: 310,
        width: 90,
        borderWidth: 1,
        fontWeight: 'bold'
    },
    top3:{
        padding: 5,
        backgroundColor: '#fff',
        width: 100,
        top: 51,
        borderWidth: 1,
        left: 15
    },
    input:{
        borderWidth: 1,
        backgroundColor: '#fff',
        color: '#000',
        padding: 5.1,
        top: 22,
        width: 286,
        left: 114
    },
    top4:{
        backgroundColor: '#fff',
        padding: 5,
        top: 22,
        borderWidth: 1,
        width: 100,
        left: 15
    },
    input2:{
        borderWidth: 1,
        backgroundColor: '#fff',
        color: '#000',
        padding: 5.1,
        width: 286,
        left: 114,
        bottom: 7
    },
    top5:{
        borderWidth: 1,
        width: 100,
        bottom: 8,
        padding: 5,
        backgroundColor: '#fff',
        left: 15
    },
    input3:{
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 5,
        left: 114,
        width: 286,
        bottom: 36.1
    }
})