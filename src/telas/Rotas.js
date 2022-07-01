import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/ bottom-tabs';

import Servicos from "./componentes/CompoInteiro/servico";
import Carrinho from "./componentes/CompoInteiro/Carrinho";

export  default function Rotas(){

    const Tab = createBottomTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Servicos" Component={Servicos}/>
            <Tab.Screen name="Carrinho" Component={Carrinho}/>
        </Tab.Navigator>
    </NavigationContainer>
}