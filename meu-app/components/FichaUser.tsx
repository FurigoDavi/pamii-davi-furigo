import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

export default function FichaUser({ nome, email }) {
  return (
    <Box p="$4" borderWidth="$1" borderRadius="$lg">
      <Text>{nome}</Text>
      <Text>{email}</Text>
    </Box>
  );
}