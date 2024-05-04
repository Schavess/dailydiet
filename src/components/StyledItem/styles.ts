import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5px;
  `;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  height: 49px;
  border: 1px solid #ccc;
  border-radius: 5px;
  /* justify-content: space-between; */
  align-items: center;
  padding: 5px;
`;

export const HourText = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  padding-right: 5px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  flex: 1;
`;

export const StatusTrue = styled.View`
  ${({ theme }) => css`
  border-radius: ${theme.FONT_SIZE.MD}px;
  width: ${theme.FONT_SIZE.MD}px;
  height: ${theme.FONT_SIZE.MD}px;
  
  `};
  display: flex;
  background-color: ${({theme}) => theme.COLORS.GREEN_MID};
`;
export const StatusFalse = styled.View`
  ${({ theme }) => css`
    border-radius: ${theme.FONT_SIZE.MD}px;
    width: ${theme.FONT_SIZE.MD}px;
    height: ${theme.FONT_SIZE.MD}px;

  `};
  display: flex;
  background-color: ${({theme}) => theme.COLORS.RED_MID};
`;