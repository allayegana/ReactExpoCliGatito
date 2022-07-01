import React from "react";
import estilos from "./estilos";

import { View, Text } from "react-native";
import Botao from "../Botao";

export default function Statuscarrinho({ total }) {

    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Text style={estilos.descricao}>Total do carrinho : </Text>
            <Text>{
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(total)
            }</Text>
        </View>
        <View style={estilos.botao}>
        <Botao valor="Concluir pedido "  invertido/>
        </View>
    </View>
}