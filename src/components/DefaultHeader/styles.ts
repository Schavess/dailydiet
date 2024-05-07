import styled, { css } from 'styled-components/native';
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  height: 120px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_5};
  `;

export const Content = styled.View`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  flex: 1;
  text-align: center;
`

export const ForwardIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XXL,
  color: theme.COLORS.GRAY_3,
  // color: backgroundColor?  theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK,    
}))`
  margin-right: auto;
`;

