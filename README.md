# Projeto React Native com Expo, NativeWind e LocalStorage

Este é um projeto simples desenvolvido com **React Native** utilizando o **Expo** para facilitar a configuração inicial e o desenvolvimento. O projeto utiliza o **NativeWind** para estilização com base em Tailwind CSS e implementa persistência de dados local utilizando **LocalStorage**.

## Tecnologias Utilizadas

- **React Native**: Biblioteca para desenvolvimento de aplicativos móveis nativos com JavaScript e React.
- **Expo**: Plataforma que facilita a criação de aplicativos React Native.
- **NativeWind**: Biblioteca que permite usar classes estilo Tailwind CSS para estilizar os componentes React Native.
- **LocalStorage**: API para armazenamento local de dados no dispositivo.

## Funcionalidades

- **Estilização Responsiva**: Utilizando o NativeWind, é possível estilizar os componentes com uma sintaxe simples e eficiente, similar ao Tailwind CSS.
- **Persistência de Dados**: Armazenamento de dados local utilizando a API LocalStorage, permitindo salvar e recuperar informações no dispositivo do usuário.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js
- Expo CLI
- npm, yarn ou pnpm (gerenciador de pacotes)

### Passo a Passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/tyagolp/rn-expo-simple.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. Inicie o projeto Expo:
   ```bash
   expo start
   # ou
   npm run start
   ```

4. Abra o app no emulador ou no dispositivo físico utilizando o Expo Go.

### Estrutura do Projeto

```bash
├── assets/            # Arquivos de mídia como imagens e ícones
├── components/        # Componentes reutilizáveis
├── routes/            # Rotas
├── screens/           # Telas principais do aplicativo
├── storage/           # Funções relacionadas ao LocalStorage
└── utils/             # Funções utilitárias
├── App.tsx            # Componente principal do aplicativo
```

### Configuração do NativeWind

O NativeWind foi configurado para permitir o uso de classes de estilo no React Native. As classes Tailwind são usadas diretamente nos componentes para garantir um desenvolvimento rápido e responsivo.

Exemplo de uso do NativeWind:

```tsx
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-lg">Bem-vindo ao app!</Text>
    </View>
  );
}
```

### Persistência de Dados com LocalStorage

O projeto utiliza a API LocalStorage para armazenar dados localmente no dispositivo. Aqui está um exemplo simples de como salvar e recuperar dados:

```tsx
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error("Erro ao salvar dados", error);
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error("Erro ao recuperar dados", error);
  }
};
```