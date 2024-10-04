import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}

export function Input({ inputRef, ...rest }: Props) {
  return (
    <TextInput
      ref={inputRef}
      className="flex-1 min-h-[56px] max-h-[56px] bg-zinc-950 text-base text-white rounded p-4"
      placeholderTextColor="#999"
      {...rest} 
    />
  )
}