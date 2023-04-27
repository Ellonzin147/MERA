import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from "../../components/Header";

export default function Solicita({navigation}){
    return(
        <View>
            <ScrollView>
            <View>
                <Header/>
            </View>
            <View style={{height: 280, width: 350, backgroundColor: '#87cefa', left: 30, top: 30}}>
                <Text style={{left:65, top: 10, fontWeight: 'bold', fontSize: 25, color: '#fff'}}>Motor de Geladeira</Text>
                <Image source={require('../../../assets/motosDeGeladeira.webp')} style={style.img}/>
                <TouchableOpacity onPress={() => navigation.navigate('Compra')} style={{textAlign:'center', backgroundColor:'#4682b4', width: 160, borderRadius: 5, borderWidth: 1, borderColor: '#fff', left: 92, top: 60}}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>Comprar Máquina</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 820, width: 350, backgroundColor: '#87cefa', left: 30, top: 90, paddingLeft: 10, paddingRight: 10}}>
                <View style={{top:70}}>
                    <Text style={{bottom: 35, left: 110, fontWeight: 'bold', fontSize: 25, color: '#fff'}}>Descrição</Text>
                    <Text style={{fontSize: 17, textAlign: 'center'}}>MOTOR COMPRESSOR REFRIGERADOR 1/4 EMR80HLR R134A EMBRACO COQUINHO</Text>
                    <Text style={{fontSize: 17, top:30, textAlign: 'center'}}>Os modelos EMR têm faixa de evaporação estendida, o que significa que cobrem aplicações com demanda de temperatura de -35 ºC a 0ºC, também um avanço em relação ao portfólio atual, cuja faixa de evaporação vai de -35ºC a -10ºC. A nova linha tem uma ampla gama de aplicações, que inclui refrigeradores domésticos e adegas refrigeradas, expositores verticais de bebidas, expositores de padarias, freezers comerciais e residenciais horizontais ou verticais, e refrigeradores comerciais de uma porta, comuns principalmente em lojas de conveniência e pequenos mercados.</Text>
                    <View style={{top: 80}}>
                        <Text style={{left: 88, fontWeight: 'bold', fontSize: 25, color: '#fff'}}>Itens inclusos</Text>
                        <View style={{top: 30}}>
                            <Text style={{textAlign: 'center', fontSize: 17}}>01 Motor Compressor</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>01 Rele Partida</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>01 Protetor Térmico</Text>
                            <Text style={{textAlign: 'center', fontSize: 17}}>01 Caixa de Proteção do Rele e Protetor</Text>
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