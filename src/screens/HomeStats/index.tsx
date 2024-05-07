import { Container, Content, Text, StatsCard, Number, CardText, DoubleStatsView, DoubleStatsCard } from './styles';

import { StatsHeaderInfo } from '../../components/StatsHeaderInfo';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import { useTheme } from "styled-components/native";

export function Homestats() {

  const { COLORS } = useTheme();

  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.navigate('home');
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.GREEN_LIGHT}
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
            <DoubleStatsCard backgroundColor={COLORS.GREEN_LIGHT}>
              <Number>32</Number>
              <CardText>refeições dentro da dieta</CardText>
            </DoubleStatsCard>
            <DoubleStatsCard backgroundColor={COLORS.RED_LIGHT}>
              <Number>77</Number>
              <CardText>refeições fora da dieta</CardText>
            </DoubleStatsCard>
          </DoubleStatsView>
        </Content>
      </Container >
    </>
  )
}