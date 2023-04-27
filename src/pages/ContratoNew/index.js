import React from "react";
import {Text, TouchableOpacity, StyleSheet, ScrollView, View} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Navbar from '../../components/Navbar'
import FuncionarioJ from "../../components/FuncionarioJ";
import FuncionarioL from '../../components/FuncionarioL';
import FuncionarioP from "../../components/FuncionarioP";

export default function ContratarNew({navigation}){
    return(
        <ScrollView>
            <Navbar/>
            <FuncionarioJ/>            
            <FuncionarioL/>  
            <FuncionarioP/>
            <View style={style.backBtn}>
        <Icon name='pluscircle' style={style.add} onPress={() => navigation.navigate('CadMaq')} />
      </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    button:{
        bottom: 50,
        left: 130,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        backgroundColor: '#4682b4',
        width: 150
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