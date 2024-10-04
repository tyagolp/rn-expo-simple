import { StatusBar } from 'expo-status-bar';
import { Routes } from '@routes/index';

export default function App() {
  return (
    <>
      <StatusBar 
        style='light'
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}