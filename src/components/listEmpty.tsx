import { Text, View } from "react-native";

type Props = {
  message: string;
}

export function ListEmpty({ message }: Props) {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-center text-white text-sm">{message}</Text>
    </View>
  )
}