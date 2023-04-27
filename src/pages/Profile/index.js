import React from "react";
import {View} from 'react-native'
import Header from "../../components/Header";
import DadosPerf from "../../components/DadosPerf";
import Solicitacao from "../../components/Solicitacao";

export default function Profile(){
    return(
        <View>
            <Header/>
            <DadosPerf/>
            <Solicitacao/>
        </View>
    )
}