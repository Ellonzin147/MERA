import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

export default function FuncionarioL(){
    return(
        <View style={style.container}>
            <Text style={{color: '#fff', textAlign: "center", fontWeight: 'bold', fontSize: 20}}>Lucas</Text>
            <Image source={require('../../../assets/tec.png')} style={style.img}/>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#87cefa',
        margin: 20,
        height: 320,
        borderRadius: 10
    },
    img:{
        margin: 20,
        marginLeft: 70,
        borderRadius: 20
    }
})