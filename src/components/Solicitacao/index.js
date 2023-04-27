import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Solicitacao(){
    return(
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: "center"}}>Meus Pedidos</Text>
            <ScrollView style={style.container}>
                <Image source={require('../../../assets/img2.jpeg')} style={{width: 300, height:200, margin: 30, marginLeft: 39}}/>
                <Text style={{color: '#fff', textAlign: "center", fontSize: 20}}>Motor Elétrico WEG W22</Text>
                <Image source={require('../../../assets/img3.jpeg')} style={{width: 300, height: 200, margin: 30, marginLeft: 39}}/>
                <Text style={{color: '#fff', textAlign: "center", fontSize: 20}}>Motor Elétrico Monofásico</Text>
                <Image source={require('../../../assets/img4.jpeg')}  style={{width: 300, height: 200, margin: 30, marginLeft: 39}}/>
                <Text style={{color: '#fff', textAlign: "center", fontSize: 20, bottom: 10}}>Motor Elétrico TRIF</Text>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
            backgroundColor: '#87cefa',
            margin: 15,
            borderRadius: 10,
            height: 300,
            top: 20
    }
})