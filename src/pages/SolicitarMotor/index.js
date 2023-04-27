import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from "../../components/Header";

export default function SolicitaMotor({navigation}){
    return(
        <View>
            <ScrollView>
            <View>
                <Header/>
            </View>
            <View style={{height: 280, width: 350, backgroundColor: '#87cefa', left: 30, top: 30}}>
                <Text style={{left:90, top: 10, fontWeight: 'bold', fontSize: 25, color: '#fff'}}>Motor Elétrico</Text>
                <Image source={require('../../../assets/img2.jpeg')} style={style.img}/>
                <TouchableOpacity onPress={() => navigation.navigate('Compra')} style={{textAlign:'center', backgroundColor:'#4682b4', width: 160, borderRadius: 5, borderWidth: 1, borderColor: '#fff', left: 92, top: 60}}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>Comprar Máquina</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 820, width: 350, backgroundColor: '#87cefa', left: 30, top: 90, paddingLeft: 10, paddingRight: 10}}>
                <View style={{top:70}}>
                    <Text style={{bottom: 35, left: 110, fontWeight: 'bold', fontSize: 25, color: '#fff'}}>Descrição</Text>
                    <Text style={{fontSize: 17, textAlign: 'center'}}>Motor NEMA 56 
Com carcaça fabricada em chapa, foi desenvolvido para variados usos. Atende às mais diversas aplicações, aliando confiabilidade com economia. Este motor está apto para ser utilizado com inversor de frequência.</Text>
                    <Text style={{fontSize: 17, top:30, textAlign: 'center'}}>
Dentre as várias aplicações, podemos citar que pode ser utilizado em: ventiladores, compressores, moinhos, esteiras ergométricas, picadoras, forradeiras e outros usos.</Text>
                    <View style={{top: 80}}>
                        <Text style={{left: 88, fontWeight: 'bold', fontSize: 25, color: '#fff'}}>Itens inclusos</Text>
                        <View style={{top: 30}}>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Potência:  3CV (HP)</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Frequência: 60 Hz</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Polaridade: 2 Polos</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Rotação Nominal:  3600 RPM</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Tensão Nominal:  220/380V</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Grau de proteção: IP21 - Protegido contra obejtos sólidos maiores que 12mm e contra</Text>
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