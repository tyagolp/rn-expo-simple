
import { Button } from '@components/button';
import { GroupCard } from '@components/groupCard';
import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { ListEmpty } from '@components/listEmpty';
import { Loading } from '@components/loading';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { useCallback, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data)
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas');
      console.log(error);
    } finally {
      setIsLoading(false);
    } 
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }
  
  useFocusEffect(useCallback(() => {
    fetchGroups()
  },[]))


  return (
    <SafeAreaView className='flex-1 p-6 bg-zinc-800'> 
      <Header showBackButton={false} />
      <Highlight title='Turmas' subtitle='Jogue com sua turma' />

      {
        isLoading ? <Loading /> :
          <FlatList 
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard 
                title={item}
                 onPress={() => handleOpenGroup(item)}
              />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() => (
              <ListEmpty message='Que tal cadastrar a primeira turma?' />
            )}
          />
      }
      <Button 
        title='Criar nova turma'
         onPress={handleNewGroup}
      />
    </SafeAreaView>
  );
}

