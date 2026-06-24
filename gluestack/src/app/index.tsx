import React from "react";
import { View, StyleSheet } from "react-native";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button, ButtonText, ButtonSpinner } from "@/components/ui/button";

export default function Index() {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("12345");

  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(false);
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <View style={styles.container}>
      <FormControl
        isInvalid={isInvalid}
        size="lg"
        style={styles.formControl}
      >
        <FormControlLabel>
          <FormControlLabelText>Senha</FormControlLabelText>
        </FormControlLabel>

        <Input size="xl">
          <InputField
            type="password"
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Digite sua senha"
          />
          <InputSlot style={{ paddingRight: 12 }}>
            <InputIcon as={AlertCircleIcon} size="lg" />
          </InputSlot>
        </Input>

        <FormControlHelper>
          <FormControlHelperText>
            Deve ter pelo menos 6 caracteres.
          </FormControlHelperText>
        </FormControlHelper>

        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            A senha precisa ter pelo menos 6 caracteres.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

      <Button onPress={handleSubmit} isDisabled={isSubmitting} size="lg" style={styles.button}>
        {isSubmitting && <ButtonSpinner color="white" />}
        <ButtonText>{isSubmitting ? "Enviando..." : "Entrar"}</ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F1EF",
    paddingHorizontal: 24,
    gap: 16,
  },

  formControl: {
    width: "100%",
    maxWidth: 400,
  },

  button: {
    width: "100%",
    maxWidth: 400,
  },

});