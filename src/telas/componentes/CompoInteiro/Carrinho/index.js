import React from "react";

import { FlatList } from "react-native";
import Item from "./Item";
import TelasCompartihada from "../TelasCompartihada";
import Statuscarrinho from "../../statusCarrinho";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Nao vai tomar vacina",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina v4",
        preco: 89.9,
        descricao: " vai tomar v4 e seu gato vai precisa duas vezes por ano ",
        quantidade: 2
    },
    {
        id: 3,
        nome: "vacina antirrabica",
        preco: 100.00,
        descricao: "uma dose de vacina antirrabica , seu gato vai precisa uma vez por ano ",
        quantidade: 1
    }

]

export default function Carrinho() {

const total = servicos.reduce((soma, { preco, quantidade }) => soma + (preco * quantidade),0);
    return <TelasCompartihada>
        <Statuscarrinho total={total} />
        <FlatList
            data={servicos}
            renderItem={({ item }) => < Item{...item} />}
            keyExtractor={({ id }) => String(id)}
        />
    </TelasCompartihada>
}