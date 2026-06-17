import { useState } from "react";

import { Button, ButtonText } from "@/components/ui/button";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel
} from "@/components/ui/checkbox";
import { Input, InputField } from "@/components/ui/input";

export default function Home() {
  const [nome, setNome] = useState("");

  return (
    <>
      <Input size="md">
        <InputField
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
      </Input>

      <Checkbox value="aceito">
        <CheckboxIndicator />
        <CheckboxLabel>Aceito os termos</CheckboxLabel>
      </Checkbox>

      <Button onPress={() => alert(`Olá, ${nome}!`)}>
        <ButtonText>Enviar</ButtonText>
      </Button>
    </>
  );
}