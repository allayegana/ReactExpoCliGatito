import React from "react";
import { TextInput } from "react-native";
import estilos from "./estilos";
import estilosPadrao from "./estilos";

export default function CompoInteiro({valor,acao}){

    const atualiza = (novoValor, acaoRetorno) =>{
        const verifiqueInteiro = novoValor.match(/^[0-9]*$/);
        if(!verifiqueInteiro) return;
        
        const removeZeroNaEsquerda = novoValor.replace(/^(0)(.+)/,'$2');
        acaoRetorno(removeZeroNaEsquerda);
    }

    const numeroEmText = String(valor);
    return <TextInput
           style={[estilosPadrao.campo, estilos]}
           keyboardType="number-pad"
           selectTextOnFocus
           onChangeText={(novoValor) => {atualiza(novoValor,acao)}}
           value={numeroEmText}

     />
}