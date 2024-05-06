import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  height: 100px;
  flex-direction: row
`;

export const Content = styled.View`
  display: flex;
  width: 85%;
  justify-content: space-between
`;

export const Text = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center;
  padding: 30px;
  `;