
import { UsersThree } from "phosphor-react-native";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({ title, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest} className="w-full h-[90px] bg-gray-500 rounded-md flex-row items-center p-6 mb-3">
          <UsersThree className="text-emerald-500 mr-5" weight="fill" size={32} />
          <Text className="text-xl text-white">
            {title}
          </Text>
        </TouchableOpacity>
    )
}