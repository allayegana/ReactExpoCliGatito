import React from "react";

import {  FlatList } from "react-native";
import Item from "./Item";
import TelasCompartihada from "../componentes/CompoInteiro/TelasCompartihada";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Nao vai tomar vacina"
    },
    {
        id: 2,
        nome: "Vacina v4",
        preco: 89.9,
        descricao: " vai tomar v4 e seu gato vai precisa duas vezes por ano "
    },
    {
        id: 3,
        nome: "vacina antirrabica",
        preco: 100.00,
        descricao: "uma dose de vacina antirrabica , seu gato vai precisa uma vez por ano "
    }

]

export default function Servicos() {
    return <TelasCompartihada>
            <FlatList
                data={servicos}
                renderItem={({ item }) => < Item{...item} />}
                keyExtractor={({ id }) => String(id)}
            />
     </TelasCompartihada>
}