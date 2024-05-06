import { Container, Content, Text } from './styles';

import { StatsHeaderInfo } from '../../components/StatsHeaderInfo';

import { useNavigation } from '@react-navigation/native'

export function Homestats() {

  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.navigate('home');
  }

  return (
    <>
      <Container>
        <Content>
          <StatsHeaderInfo statistic={'40,86%'} onPress={handleBackNavigation} />
          <Text>Estatísticas Gerais</Text>
        </Content>
      </Container>
    </>
  )
}