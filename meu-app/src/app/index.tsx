import React from "react";
import { View } from "react-native";

import BotaoCustom from "../../components/BotaoCustom";
import CampoTexto from "../../components/CampoTexto";
import FichaUser from "../../components/FichaUser";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        gap: 16,
      }}
    >
      <CampoTexto placeholder="Digite seu nome" />

      <BotaoCustom
        texto="Enviar"
        onPress={() => alert("Botão clicado!")}
      />

      <FichaUser
        nome="Davi Furigo"
        email="davi@email.com"
      />
    </View>
  );
}