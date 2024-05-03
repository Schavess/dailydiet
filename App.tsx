import { ThemeProvider } from 'styled-components/native';

import { Home } from "./src/screens/Home";

import theme from './src/theme';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { Text } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <Text>Carregando...</Text>}
    </ThemeProvider>
  );
}
