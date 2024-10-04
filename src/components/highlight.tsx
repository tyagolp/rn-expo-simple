
import { Text, View } from "react-native";

  type Props = {
    title: string;
    subtitle: string;
  }
  export function Highlight({ title, subtitle }: Props) {
    // const navigation = useNavigation()
  
    // function handleGoBack() {
    //   navigation.navigate('groups')
    // }

    return (
        <View className="w-full my-8">
          <Text className="text-center text-xl font-bold text-white">
            {title}
          </Text>
    
          <Text className="text-center font-normal text-gray-300">
            {subtitle}
          </Text>
        </View>
    )
}