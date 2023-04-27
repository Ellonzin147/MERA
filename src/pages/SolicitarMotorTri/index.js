import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from "../../components/Header";

export default function SolicitarMotorTri({navigation}){
    return(
        <View>
            <ScrollView>
            <View>
                <Header/>
            </View>
            <View style={{height: 280, width: 350, backgroundColor: '#87cefa', left: 30, top: 30}}>
                <Text style={{left:65, top: 10, fontWeight: 'bold', fontSize: 25, color: '#fff'}}>Motor de Trituração</Text>
                <Image source={require('../../../assets/img5.jpeg')} style={style.img}/>
                <TouchableOpacity onPress={() => navigation.navigate('Compra')} style={{textAlign:'center', backgroundColor:'#4682b4', width: 160, borderRadius: 5, borderWidth: 1, borderColor: '#fff', left: 92, top: 60}}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>Comprar Máquina</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 820, width: 350, backgroundColor: '#87cefa', left: 30, top: 90, paddingLeft: 10, paddingRight: 10}}>
                <View style={{top:70}}>
                    <Text style={{bottom: 35, left: 110, fontWeight: 'bold', fontSize: 25, color: '#fff'}}>Descrição</Text>
                    <Text style={{fontSize: 17, textAlign: 'center'}}>Motor Elétrico Blindado, 7,5 cv, 2 polos, monofásico, 220/254/440/508 V~, NOVA MOTORES
Conteúdo da Embalagem:
1 Motor elétrico
Indicado para acionamento de máquinas e equipamentos</Text>
                    <Text style={{fontSize: 17, top:30, textAlign: 'center'}}>Tensão (V):220/254/440/508V~ - Monofásico - Bifásico
Potência do motor (cv):7,5 cv
Frequência (Hz):60 Hz
Rotação (rpm):3485
Número de polos do motor elétrico:02 polos
Segue norma:ABNT NBR IEC 60745-1</Text>
                    <View style={{top: 80}}>
                        <Text style={{left: 88, fontWeight: 'bold', fontSize: 25, color: '#fff'}}>Itens inclusos</Text>
                        <View style={{top: 30}}>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Diâmetro do eixo do motor elétrico:1.1/8"</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Tipo de carcaça do motor elétrico: Blindada</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Modelo da carcaça do motor elétrico: 112M</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Rotação Nominal:  3600 RPM</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Índice de proteção (IP) do motor elétrico:IP56</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>Garantia -12 Meses</Text>
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