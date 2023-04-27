import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from "../../components/Header";

export default function SolicitarMotorEM({navigation}){
    return(
        <View>
            <ScrollView>
            <View>
                <Header/>
            </View>
            <View style={{height: 280, width: 350, backgroundColor: '#87cefa', left: 30, top: 30}}>
                <Text style={{left:25, top: 10, fontWeight: 'bold', fontSize: 25, color: '#fff'}}>Motor Elétrico Monofásico</Text>
                <Image source={require('../../../assets/img3.jpeg')} style={style.img}/>
                <TouchableOpacity onPress={() => navigation.navigate('Compra')} style={{textAlign:'center', backgroundColor:'#4682b4', width: 160, borderRadius: 5, borderWidth: 1, borderColor: '#fff', left: 92, top: 60}}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>Comprar Máquina</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 820, width: 350, backgroundColor: '#87cefa', left: 30, top: 90, paddingLeft: 10, paddingRight: 10}}>
                <View style={{top:70}}>
                    <Text style={{bottom: 35, left: 110, fontWeight: 'bold', fontSize: 25, color: '#fff'}}>Descrição</Text>
                    <Text style={{fontSize: 17, textAlign: 'center'}}>Motor Elétrico Weg 2CV Monofásico Baixa Rotação IV Polos para Betoneiras.
Motor destinado para uso em Betoneiras, com sentido de rotação anti-horário.</Text>
                    <Text style={{fontSize: 17, top:30, textAlign: 'center'}}>Alta durabilidade,
alto torque de partida,
suporta queda de tensão da rede elétrica,
melhor custo-benefício do mercado e
maior e melhor rede de Assistência Técnica do Brasil</Text>
                    <View style={{top: 80}}>
                        <Text style={{left: 88, fontWeight: 'bold', fontSize: 25, color: '#fff'}}>Itens inclusos</Text>
                        <View style={{top: 30}}>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Potência:  2CV (HP)</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Frequência: 60 Hz</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Polaridade: 4 Polos</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Rotação Nominal:  1750 RPM</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Tensão Nominal:  127/220V</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Grau de proteção: IP21 - Protegido contra obejtos sólidos maiores que 12mm e contra queda vertical de gotas de água</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{height: 20, backgroundColor: '#fff'}}>
                <Text></Text>
                <Text></Text>
            </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({

    img:{
        width: 180,
        height: 140,
        left: 83,
        top: 30,
    }

})