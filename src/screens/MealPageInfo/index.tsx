import { Container, Content, View, Text, Title } from './styles'
import { useNavigation } from '@react-navigation/native';

import { DefaultHeader } from '../../components/DefaultHeader'

import { useTheme } from "styled-components/native";

// interface MealEditProps {
//   route: {
//     params?: {
//       name: string;
//       hour: string;
//       inDiet: boolean;
//     };
//   };
// }

export function MealPageInfo({ route }: any) {

  const { COLORS } = useTheme();

  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.navigate('home');
  }

  const { name, hour, inDiet } = route.params ?? { name: '', hour: '', inDiet: false };
  return (
    <Container>
      <DefaultHeader title={'Refeição'} onPress={handleBackNavigation} style={{ backgroundColor: inDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT }} />
      <Content>
        <View>
          <Title>{name}</Title>
          <Text>Description: orem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada nulla pellentesque mi pulvinar volutpat. Donec in ultrices urna. Suspendisse tincidunt consequat est non vehicula. Nulla faucibus nec elit a imperdiet. Nam tempor metus eu imperdiet dapibus. Sed ultrices nisi sed augue tincidunt finibus. Aenean nec risus mauris. Maecenas commodo justo eu libero finibus euismod.</Text>
          <Text>Hora: {hour}</Text>
          <Text>Data: ''</Text>
          <Text>{inDiet ? 'Dentro da dieta' : 'Fora da dieta'}</Text>
        </View>
      </Content>
    </Container>
  )
}
