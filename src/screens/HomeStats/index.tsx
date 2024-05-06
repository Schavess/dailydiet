import { Container, Content, Text, StatsCard, Number, CardText, DoubleStatsView, DoubleStatsCard } from './styles';

import { StatsHeaderInfo } from '../../components/StatsHeaderInfo';

import { useNavigation } from '@react-navigation/native'

import { StatusBar } from 'react-native';

export function Homestats() {

  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.navigate('home');
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F4E6E7"
      />
      <Container>
        <StatsHeaderInfo statistic={'40,86%'} onPress={handleBackNavigation} />
        <Content>
          <Text>Estatísticas gerais</Text>
          <StatsCard>
            <Number>42</Number>
            <CardText>melhor sequência de pratos dentro da dieta</CardText>
          </StatsCard>
          <StatsCard>
            <Number>109</Number>
            <CardText>refeições registradas</CardText>
          </StatsCard>
          <DoubleStatsView>
            <DoubleStatsCard backgroundColor={'#E5F0DB'}>
              <Number>32</Number>
              <CardText>refeições dentro da dieta</CardText>
            </DoubleStatsCard>
            <DoubleStatsCard backgroundColor={'#F4E6E7'}>
              <Number>77</Number>
              <CardText>refeições fora da dieta</CardText>
            </DoubleStatsCard>
          </DoubleStatsView>
        </Content>
      </Container >
    </>
  )
}