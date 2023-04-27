import React from "react";
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import DadosJ from "../../components/DadosJ";
import Header from '../../components/Header'
import Curso from "../../components/Curso";

export default function Joao(){
    return(
        <View>
            <Header/>
            <DadosJ/>
            <Curso/>
        </View>
    )
}

