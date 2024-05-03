import styled, { css } from 'styled-components/native';
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
  display: flex;
  height: 150px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `;

export const Content = styled.View`
  display: flex;
  width: 85%;
  height: 120px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`;

export const StatText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
export const SubStatText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.GRAY_3};
  `};
  border-radius: 5px;
  margin-bottom: 20px;
`

export const ForwardIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.GREEN_DARK,
}))`
  margin-left: auto;
`;

