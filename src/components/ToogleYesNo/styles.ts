import styled, { css } from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

type buttonProps = {
  isSelected: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonYes = styled(TouchableOpacity)<buttonProps>`
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
  justify-content: space-evenly;
  width: 49%;
  height: 56px;
  border: 2px ${({ theme, isSelected }) => isSelected ? theme.COLORS.GREEN_MID : theme.COLORS.GRAY_5};
  background-color: ${({ theme, isSelected }) => isSelected ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_5};
`;
export const ButtonNo = styled(TouchableOpacity)<buttonProps>`
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
  justify-content: space-evenly;
  width: 49%;
  height: 56px;
  border: 2px ${({ theme, isSelected }) => isSelected ? theme.COLORS.RED_MID : theme.COLORS.GRAY_5};
  background-color: ${({ theme, isSelected }) => isSelected ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_5};
`;

export const StatusTrue = styled.View`
  ${({ theme }) => css`
  border-radius: ${theme.FONT_SIZE.SM}px;
  width: ${theme.FONT_SIZE.SM}px;
  height: ${theme.FONT_SIZE.SM}px;
  
  `};
  display: flex;
  background-color: ${({theme}) => theme.COLORS.GREEN_DARK};
`;
export const StatusFalse = styled.View`
  ${({ theme }) => css`
    border-radius: ${theme.FONT_SIZE.SM}px;
    width: ${theme.FONT_SIZE.SM}px;
    height: ${theme.FONT_SIZE.SM}px;

  `};
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
`;
