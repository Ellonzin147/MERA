import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header'


export default function Maquinario ({navigation}){
    return(
        <ScrollView>
        <View style={style.container}>
        <View style={style.header}>
        <Header/>
        </View>
            <View style={style.maquinario1}>
              <View>
                <Image source={require('../../../assets/motosDeGeladeira.webp')} style={{width:90, height:90, left: 10, top: 10}}/>
                <Text style={{top: 15, left: 25}}>Motor de</Text>
                <Text style={{top: 15, left: 23}}>Geladeira</Text>
              </View>
              <View style={style.data}>
                <Text style={{bottom: 15, fontWeight: 'bold', fontSize:20, color: '#fff'}}>Dados</Text>
                <Text>12/24 volts</Text>
                <Text>45 Watts</Text>
                <Text>Temperaturas de -30°C a 70°C</Text>
                <Text>Robusto e Resistente</Text>
              </View>
            </View>
            <View style={style.maquinario2}>
            <View>
                <Image source={require('../../../assets/img2.jpeg')} style={{width:90, height:90, left: 10, top: 10}}/>
                <Text style={{top: 15, left: 12}}>Motor Elétrico</Text>
                <Text style={{top: 15, left: 23}}>WEG W22</Text>
              </View>
              <View style={style.data}>
                <Text style={{bottom: 15, fontWeight: 'bold', fontSize:20, color: '#fff'}}>Dados</Text>
                <Text>Potencia de 30CV</Text>
                <Text>Duas Polaridades</Text>
                <Text>Frequência 60Hz</Text>
                <Text>Padrão B3D, cinza Munsell N 6,5</Text>
              </View>
            </View>
            <View style={style.maquinario3}>
            <View>
                <Image source={require('../../../assets/img3.jpeg')} style={{width:90, height:90, left: 10, top: 10}}/>
                <Text style={{top: 15, left: 11}}>Motor Elétrico</Text>
                <Text style={{top: 15, left: 16}}>Monofásico</Text>
              </View>
              <View style={style.data}>
                <Text style={{bottom: 15, fontWeight: 'bold', fontSize:20, color: '#fff'}}>Dados</Text>
                <Text>Modelo w22 IR3 Premium</Text>
                <Text>220/380V</Text>
                <Text>Eixo em carbono SAE 1040/45</Text>
                <Text>Potência de 7,5 CV</Text>
              </View>
            </View>
            <View style={style.maquinario4}>
            <View>
                <Image source={require('../../../assets/img4.jpeg')} style={{width:90, height:90, left: 10, top: 10}}/>
                <Text style={{top: 15, left: 11}}>Motor Elétrico</Text>
                <Text style={{top: 15, left: 35}}>TRIF</Text>
              </View>
              <View style={style.data}>
                <Text style={{bottom: 15, fontWeight: 'bold', fontSize:20, color: '#fff'}}>Dados</Text>
                <Text>250SM IR3 Premium</Text>
                <Text>Potência de 100CV e 4 polos</Text>
                <Text>Tensão de 220/380/440V</Text>
                <Text>Carcaça B3T e proteção IP55</Text>
              </View>

            </View>

            <View style={style.maquinario5}>
            <View>
                <Image source={require('../../../assets/img5.jpeg')} style={{width:90, height:90, left: 10, top: 10}}/>
                <Text style={{top: 15, left: 16}}>Máquina de</Text>
                <Text style={{top: 13, left: 20}}>Trituração</Text>
              </View>
              <View style={style.data}>
                <Text style={{bottom: 15, fontWeight: 'bold', fontSize:20, color: '#fff'}}>Dados</Text>
                <Text>Tensão 400V</Text>
                <Text>Grau de proteção de IP55</Text>
                <Text>Opções de 2,4 ou 6 polos</Text>
                <Text>Potência de 0,75KW a 200KW</Text>
              </View>

            </View>
        </View>
      <View style={style.backBtn}>
        <Icon name='pluscircle' style={style.add} onPress={() => navigation.navigate('CadMaq')} />
      </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    perfil: {
        backgroundColor: '#dcdcdc',
        borderRadius: 50,
        width: 50,
        height: 50,
        left: 350,
        top: 60
    },

    mera: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        top: 20
    },

    header: {
        backgroundColor: '#00bfff',
        height: 140,
        width: 430,
    },

    maquinario1: {
        backgroundColor: '#87cefa',
        width: 350,
        height: 220,
        marginTop: 70,
        borderRadius: 10,
    },

    maquinario2: {
        backgroundColor: '#87cefa',
        width: 350,
        height: 220,
        marginTop: 40,
        borderRadius: 10,
    },

    maquinario3: {
        backgroundColor: '#87cefa',
        width: 350,
        height: 220,
        marginTop: 40,
        borderRadius: 10,
    },

    maquinario4: {
        backgroundColor: '#87cefa',
        width: 350,
        height: 220,
        marginTop: 40,
        borderRadius: 10,
    },

    maquinario5: {
      backgroundColor: '#87cefa',
      width: 350,
      height: 220,
      marginTop: 40,
      marginBottom: 20,
      borderRadius: 10,
  },

  data:{
      left: 135,
      bottom: 95,
      textAlign: 'center'
  },
  header:{
    backgroundColor: '#00bfff',
    height: 140,
    width: 450
    
},
profile:{
    backgroundColor: '#dcdcdc',
    borderRadius: 50,
    width: 50,
    height: 50,
    left: 350,
    bottom: 10
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
    top: 60,
    marginLeft: 10
},
titulo:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    top: 30,
    color: '#fff'
},
backBtn:{
  backgroundColor: '#4682b4',
  width: 50,
  height: 50,
  borderRadius: 50,
  left: 350, 
  marginBottom: 20
},
add:{
  fontSize: 30, 
  left: 10,
  top:9
}
})