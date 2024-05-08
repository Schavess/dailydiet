import { Container, Content, Text } from './styles'
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
        <Text>Editar refeição</Text>
        <Text>{name}</Text>
        <Text>{hour}</Text>
        <Text>{inDiet ? 'true' : 'false'}</Text>
      </Content>
    </Container>
  )
}
