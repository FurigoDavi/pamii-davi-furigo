import { Input, InputField } from "@/components/ui/input";

interface CampoTextProps {
  placeholder?: string;
}

export default function CampoText({ placeholder }: CampoTextProps) {
  return (
    <Input>
      <InputField placeholder={placeholder} />
    </Input>
  );
}