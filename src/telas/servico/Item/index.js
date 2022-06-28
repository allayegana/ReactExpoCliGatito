import React, { useState } from "react";

import { Text, View } from "react-native";
import CompoInteiro from "../../componentes/CompoInteiro";
import Botao from "../../componentes/Botao";


import estilos from "./estilos";

export default function Item({ nome, preco, descricao }) {
    const [Quantidade, setQuantidade] = useState(1);
    return <>
        <View style={estilos.informacao}>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}> {
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)
            }</Text>
        </View>
        <View style={estilos.carrinho}>
            <View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Quantidade:</Text>
                    <CompoInteiro style={estilos.quantidade} valor={Quantidade} acao={setQuantidade} />
                </View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>preço:</Text>
                    <Text style={estilos.preco}>0</Text>
                </View>
            </View>
            <Botao valor="Adiconar" acao={() => { }} />
        </View>
        <View style={estilos.divisor} />

    </>
}