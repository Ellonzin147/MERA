import React from "react";
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import DadosP from "../../components/DadosP";
import Navbar from "../../components/Navbar";
import Curso from "../../components/Curso";
import Header from '../../components/Header'

export default function Pedro(){
    return(
        <View>
            <Header/>
            <DadosP/>
            <Curso/>
        </View>
    )
}

