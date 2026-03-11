import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";

const Stack = createNativeStackNavigator();

function Login({navigation}){
return(
<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<Text>Login</Text>
<Button title="Entrar" onPress={()=>navigation.navigate("Produtos")} />
</View>
);
}

function Produtos({navigation}){
return(
<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<Text>Lista de Produtos</Text>
<Button title="Detalhes" onPress={()=>navigation.navigate("Detalhes")} />
</View>
);
}

function Detalhes(){
return(
<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<Text>Detalhes do Produto</Text>
</View>
);
}

export default function App(){
return(
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={Login}/>
<Stack.Screen name="Produtos" component={Produtos}/>
<Stack.Screen name="Detalhes" component={Detalhes}/>
</Stack.Navigator>
</NavigationContainer>
);
}