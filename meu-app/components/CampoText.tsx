import { Input, InputField } from "@/components/ui/input";

export default function CampoText({ placeholder }) {
  return (
    <Input>
      <InputField placeholder={placeholder} />
    </Input>
  );
}