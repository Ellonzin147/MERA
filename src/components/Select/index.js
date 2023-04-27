import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'


export default function Select({navigation}){
    return(
        <View style={style.img}>
            <Icons name="images" style={{fontSize: 100, left: 120, top: 50}}/>
            <Text style={{left: 95, top: 100}}>Selecione Uma Imagem</Text>
            <View>
                
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    img:{
        backgroundColor: '#d3d3d3',
        margin: 30,
        height: 250,
        top: 15,
        borderRadius: 10
    },
    
})