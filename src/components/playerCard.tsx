
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonIcon } from './buttonIcon';
import { Person, User } from 'phosphor-react-native';

type Props = {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: Props) {
  return(
    <View className='w-full h-14 bg-zinc-700 rounded flex-row items-center mb-4'>
      <User className='ml-4 mr-1 text-gray-200 text-2xl' color='#aaa' weight='fill' />
      
      <Text className='flex-1 text-gray-200'>
        {name}
      </Text>

      <ButtonIcon 
        icon="close" 
        type="SECONDARY"
        onPress={onRemove}
      />
    </View>
  );
}