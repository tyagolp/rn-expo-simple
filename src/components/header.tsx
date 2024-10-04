import logoImg from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import {CaretLeft} from 'phosphor-react-native'

import { Image, TouchableOpacity, View } from "react-native";

type Props = {
    showBackButton?: boolean;
  }

export function Header({ showBackButton = false }: Props){ 

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

    return (
        <View className="w-full flex-row items-center justify-center">
            {showBackButton && 
                <TouchableOpacity className='flex-1' onPress={handleGoBack}>
                    <CaretLeft className=" text-yellow-500 text-4xl"  />
                </TouchableOpacity>
            }
            <Image source={logoImg} className='w-[46px] h-[55px]' />
        </View>
    )
}