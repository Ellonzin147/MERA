import React from "react";
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import DadosL from "../../components/DadosL";
import Header from '../../components/Header'
import Curso from "../../components/Curso";

export default function Lucas({navigation}){
    return(
        <View>
            <Header/>
            <DadosL/>
           
            <Curso/>
        </View>
    )
}

