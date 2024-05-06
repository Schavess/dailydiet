import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native'
import { Plus } from "phosphor-react-native";


export const Container = styled.View`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  /* color: ${theme.COLORS.GRAY_1}; */
  `};
  width: 85%;
  padding-bottom: 10px ;
`;

export const Content = styled(TouchableOpacity)`
  display: flex;
  width: 85%;
  height: 60px;
  flex-direction: row;
  background-color: ${({theme}) => theme.COLORS.GRAY_2};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.WHITE};
  `};
  padding-left: 20px;
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XL,
  color: theme.COLORS.WHITE,
}))`
`;