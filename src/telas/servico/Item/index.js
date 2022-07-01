import React, { useState } from "react";

import { Text, TouchableOpacity, View } from "react-native";
import CompoInteiro from "../../componentes/CompoInteiro";
import Botao from "../../componentes/Botao";


import estilos from "./estilos";

export default function Item({ nome, preco, descricao }) {

    const [Quantidade, setQuantidade] = useState(1);

    const [Total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const atualizaquantidadeTotal = (novoQuantidade) => {
        setQuantidade(novoQuantidade)
        calculaTotal(novoQuantidade)
    }

    const calculaTotal = (novoQuantidade) => {
        setTotal(novoQuantidade * preco);
    }

    const invertExpandir = () => {
        setExpandir(!expandir)
        atualizaquantidadeTotal(1)
    }

    return <>
        <TouchableOpacity style={estilos.informacao} onPress={invertExpandir}>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}> {
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)
            }</Text>
        </TouchableOpacity>
        {expandir &&
            <View style={estilos.carrinho}>
                <View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>Quantidade:</Text>
                        <CompoInteiro style={estilos.quantidade} valor={Quantidade} acao={atualizaquantidadeTotal} />
                    </View>
                    <View style={estilos.valor}>
                        <Text style={estilos.descricao}>total:</Text>
                        <Text style={estilos.preco}> {
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                            }).format(Total)
                        }</Text>
                    </View>
                </View>
                <Botao valor="Adiconar ao Carrinho" acao={() => { }} />
            </View>
        }
        <View style={estilos.divisor} />

    </>
}