import styled, { css } from 'styled-components/native';

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
