import React from "react";
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default  function Curso(){
    return(
        <ScrollView style={style.container}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff', textAlign: "center", top: 10}}>Certificação</Text>
            <Image source={require('../../../assets/Nr35.jpg')} style={style.img}/>
            <View style={style.container2}>
            <Image source={require('../../../assets/Nr10.png')} style={style.img2}/>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#87cefa',
        margin: 10,
        marginTop: 20,
        height: 320,
        borderRadius: 10
    },
    img:{
        width: 350,
        height: 250,
        margin: 20
    },
    container2:{
        backgroundColor: '#87cefa',
        margin: 10,
        marginTop: 20,
        height: 320,
        borderRadius: 10
    },
    img2:{
        width: 350,
        height: 250,
        margin: 10
    }
})