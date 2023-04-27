import React from 'react'
import {View, Text, StyleSheet} from 'react-native'





export default function Rev(){
    return(

        

        <View>
            <Text style={style.rev}>
                Próxima Revisão:
            </Text>

        </View> 
    )
}

const style = StyleSheet.create({
    rev:{
        padding: 8,
        borderWidth: 1,
        backgroundColor: '#fff',
        width: 185,
        left: 215,
        bottom: 48,
        fontWeight: 'bold'
    },
    date:{
        width: 30
    }
})