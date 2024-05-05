import { ThemeProvider } from 'styled-components/native';

import { Routes } from "./src/routes";

import theme from './src/theme';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { Text } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Text>Carregando...</Text>}
    </ThemeProvider>
  );
}
