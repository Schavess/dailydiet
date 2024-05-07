import styled, { css } from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

interface DoubleStatsCardProps {
  backgroundColor: string; // Definindo a propriedade que receberá a cor de fundo
}

export const Container = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  align-items: center;
  `;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  `;

export const Text = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center;
  padding: 30px;
  `;

export const StatsCard = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  height: 100px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
export const DoubleStatsView = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;
export const DoubleStatsCard = styled.View<DoubleStatsCardProps>`
  width: 48.5%;
  background-color: ${(props) => props.backgroundColor};
  height: 120px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
export const Number = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
    text-align: center;
`;
export const CardText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
    text-align: center;
`;

