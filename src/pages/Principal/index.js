import React from "react";
import { View, StyleSheet, Text, Image, ScrollView,TouchableOpacity} from 'react-native';
import Frase from "../../components/Frase";
import Header from '../../components/Header'



export default function Home({navigation}){
    return(
        <ScrollView>
<Header/>
        <Frase/>
        <View style={style.container}>
        <Text style={style.title}>Alguns de Nossos Técnicos</Text>
            <Image source={require('../../../assets/tec.png')} style={{width: 70, height: 70, borderRadius: 50, marginLeft: 20, bottom: 10}}/>
            <Text style={{color: '#fff',marginLeft: 35}} onPress={() => navigation.navigate('Joao')}>João</Text>
            <Image source={require('../../../assets/tec.png')} style={{width: 70, height: 70, borderRadius: 50, marginLeft: 140, bottom: 95}}/>
            <Text style={{color: '#fff', marginLeft: 155, bottom: 85}} onPress={() => navigation.navigate('Lucas')}>Lucas</Text>
            <Image source={require('../../../assets/tec.png')} style={{width: 70, height: 70, borderRadius: 50, marginLeft: 250, bottom: 180}}/>
            <Text style={{color: '#fff', marginLeft: 265, bottom: 172}} onPress={() => navigation.navigate('Pedro')}>Pedro</Text>
        </View>
            <TouchableOpacity onPress={() => navigation.navigate('ContratoNew')}>
                <Text style={{backgroundColor: '#4682b4', borderWidth: 1, borderColor: '#fff', width: 180, borderRadius: 5, bottom: 70, left: 120, textAlign: "center", color: '#fff'}}>Visualizar Técnicos</Text>
            </TouchableOpacity>
        <View>
            <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>Vizualizar Maquinarios</Text>
            <View style={{backgroundColor: '#87cefa', width:355, height: 250, margin: 30, borderRadius: 10}}>
            <Image source={require('../../../assets/maq.jpg')} style={{width: 290, height: 150, margin: 30}}/>
            <TouchableOpacity onPress={() => navigation.navigate('Maquinario')}>
                    <Text style={{backgroundColor: '#4682b4', borderWidth: 1, borderColor: '#fff', width: 180, borderRadius: 5,bottom: 2, left: 90, textAlign: "center", color: '#fff'}}>Visualizar Maquinário</Text>
                </TouchableOpacity>
            </View>
        </View>
       
        </ScrollView>
    )
}

const style = StyleSheet.create({
    header:{
        backgroundColor: '#00bfff',
        height: 150,
        
    },
    titulo:{
        color: '#fff',
        textAlign: "center",
        top: 20,
        fontWeight: "bold",
        fontSize: 30,
        left: 10
    },
    profile:{
        backgroundColor: '#dcdcdc',
        borderRadius: 50,
        width: 50,
        height: 50,
        left: 350,
        bottom: 30
    },
    perfil:{
        textAlign: "center",
        left: -1,
        fontSize: 40,
        top: 4
    },
    img:{
        width: 100,
        height: 50,
        top: 60
    },
    container:{
        backgroundColor: '#87cefa',
        height: 180,
        margin: 30,
        borderRadius: 10,
        marginTop: 60
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        bottom: 50
    },

    

})