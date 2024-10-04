import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, View } from "react-native";

import { AppError } from "@utils/AppError";
import { groupCreate } from "@storage/group/groupCreate";

import { Header } from "@components/header";
import { Button } from "@components/button";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { SafeAreaView } from "react-native-safe-area-context";
import { UsersThree } from "phosphor-react-native";

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNew() {
    try {

      if(group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.');
      }

      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
        console.log(error);
      }
    }
  }

  return (
    <SafeAreaView className="flex-1 p-6 bg-zinc-800">
      <Header showBackButton />

      <View className="flex-1 justify-center ">
        <UsersThree size={56} className="text-emerald-400 self-center" />
        
        <Highlight 
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </View>
    </SafeAreaView>
  )
}