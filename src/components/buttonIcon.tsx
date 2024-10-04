import classNames from "classnames";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'


type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps
}  
  export function ButtonIcon({ type = 'PRIMARY', icon, ...rest }: Props) {

    const color = type === "PRIMARY" ? '#00875f' : `#aa2934`
    return (
      <TouchableOpacity 
        className="min-h-[56px] max-h-[56px] mx-3 justify-center items-center" 
        {...rest}
      >
        <MaterialIcons 
          name={icon} 
          color={color}
          size={24} 
        />
      </TouchableOpacity>
    )
  }