import React from "react";
import { TouchableOpacity, Text } from "react-native";
import funcaoBotaoEstilos from "./estilos";

export default function Botao({pequeno = false, invertido = false , valor, acao, estilos}) {

    const funcaoBotao = funcaoBotaoEstilos(pequeno,invertido);

    return <TouchableOpacity onPress={acao} style={[funcaoBotao.botao,estilos]}>
        <Text style={funcaoBotao.valor}>{valor}</Text>
    </TouchableOpacity>
}