import { Container, Content, Text } from './styles';

import { StatsHeader } from '../../components/StatsHeader';

import { useNavigation } from '@react-navigation/native'

export function Homestats() {

  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Content>
        <Text>Estatísticas</Text>
        <StatsHeader statistic={'40,86%'} onPress={handleBackNavigation} />
      </Content>
    </Container>
  )
}