import React from 'react'
import {View, Text,StyleSheet, Image} from 'react-native'



export default function NavbarJ(){
return(
<View style={style.header}>
<Image source={require('../../../assets/logo.png')} style={style.img}/>
<Text style={style.titulo}>MERA</Text>
</View>

)
}

const style = StyleSheet.create({
header:{
    backgroundColor: '#00bfff',
    height: 140,
    width: 415
    
},
titulo:{
    color: '#fff',
    textAlign: "center",
    top: 20,
    fontWeight: "bold",
    fontSize: 30,
    left: 120
},

img:{
    width: 100,
    height: 50,
    top: 60
},

})