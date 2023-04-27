import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
  
  
 
  import Home from "./src/pages/Principal";
  import Maquinario from "./src/pages/Maquinario";
  import Joao from "./src/pages/Joao";
  import Lucas from "./src/pages/Lucas";
  import Pedro from "./src/pages/Pedro";
  import Solicitar from './src/pages/Solicitar';
  import Os from "./src/pages/Os";
  import CadMaq from "./src/pages/CadMaq";
  import ContratoNew from './src/pages/ContratoNew';
  import SolicitarMotor from './src/pages/SolicitarMotor';
  import SolicitarMotorEM from './src/pages/SolicitarMotorEM';
  import SolicitarMotorET from './src/pages/SolicitarMotorET';
  import SolicitarMotorTri from './src/pages/SolicitarMotorTri';
 
  
   
  const Stack = createStackNavigator();
  
  export default function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={Home}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}/>
        
        <Stack.Screen name="Maquinario" component={Maquinario}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}/>
        <Stack.Screen name="Joao" component={Joao} 
        options={{
          title:'',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="Lucas" component={Lucas} 
        options={{
          title:'',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="Pedro" component={Pedro} 
        options={{
          title:'',
          headerTransparent: true,
          headerShown: false
        }}/>

  
         <Stack.Screen name="Solicitar" component={Solicitar} 
        options={{
          title:'',
          headerTransparent: true,
          headerShown: false
        }}/>
         <Stack.Screen name="Os" component={Os} 
        options={{
          title:'',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="CadMaq" component={CadMaq} 
        options={{
          title:'',
          headerTransparent: true,
          headerShown: false
        }}/>
        <Stack.Screen name="ContratoNew" component={ContratoNew} 
        options={{
          title:'',
          headerTransparent: true,
          headerShown: false
        }}/>

       

        <Stack.Screen name="SolicitarMotor" component={SolicitarMotor} 
        options={{
          title:'',
          headerTransparent: true,
          headerShown: false
        }}/>

        <Stack.Screen name="SolicitarMotorEM" component={SolicitarMotorEM} 
        options={{
          title:'',
          headerTransparent: true,
          headerShown: false
        }}/>

        <Stack.Screen name="SolicitarMotorET" component={SolicitarMotorET} 
        options={{
          title:'',
          headerTransparent: true,
          headerShown: false
        }}/>

        <Stack.Screen name="SolicitarMotorTri" component={SolicitarMotorTri} 
        options={{
          title:'',
          headerTransparent: true,
          headerShown: false
        }}/>

          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }