import React, { useState } from "react";

import { Text, View } from "react-native";
import CompoInteiro from "../..";
import Botao from "../../../Botao";


import estilos from "./estilos";

export default function Item({ nome, preco, descricao, quantidade: quandidadeInicial }) {

    const [Quantidade, setQuantidade] = useState(quandidadeInicial);

    const [Total, setTotal] = useState(preco * quandidadeInicial);

    const atualizaquantidadeTotal = (novoQuantidade) => {
        setQuantidade(novoQuantidade)
        calculaTotal(novoQuantidade)
    }

    const calculaTotal = (novoQuantidade) => {
        setTotal(novoQuantidade * preco);
    }


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
            <Botao valor="Remover do Carrinho" acao={() => { }} />
        </View>
        <View style={estilos.divisor} />

    </>
}