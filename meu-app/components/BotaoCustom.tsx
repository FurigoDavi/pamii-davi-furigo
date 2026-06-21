import { Button, ButtonText } from "@/components/ui/button";

export default function BotaoCustom({ texto, onPress }) {
  return (
    <Button onPress={onPress}>
      <ButtonText>{texto}</ButtonText>
    </Button>
  );
}