import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Assinatura(){
    return(
        <View>
            <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 190,
    left: 14,
    bottom: 110
  }}
/>
    <Text style={{bottom: 105, left: 15}}>
        Cliente
    </Text>

    <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 190,
    left: 210,
    bottom: 128
  }}
  
/>
<Text style={{bottom: 122, left: 214}}>Técnico</Text>
        </View>
    )
}