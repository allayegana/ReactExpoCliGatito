import React from "react";
import { SafeAreaView, KeyboardAvoidingView, Platform ,StatusBar} from "react-native";

import estilosGlobal from "../Carrinho/estilo";


export default function TelasCompartihada({ children } ) {

    return <SafeAreaView style={estilosGlobal.preencher}>
        <StatusBar />
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={estilosGlobal.preencher}
        >
            { children }

        </KeyboardAvoidingView>
    </SafeAreaView>
}