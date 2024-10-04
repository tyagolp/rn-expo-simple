import classNames from "classnames";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
  }
  
  export function Button({ title, type = 'PRIMARY', ...rest }: Props) {

    const background = type === "PRIMARY" ? 'bg-emerald-400' : `bg-red-800`
    return (
      <TouchableOpacity className={classNames("flex-1 min-h-[56px] max-h-[56px] rounded-md justify-center items-center", background)} {...rest}>
        <Text className="text-base text-white font-bold">{title}</Text>
      </TouchableOpacity>
    )
  }