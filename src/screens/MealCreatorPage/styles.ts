import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  height: 100%;
  flex-direction: column;
  ${({ theme }) => css`
  background-color: ${theme.COLORS.GRAY_5};
  `};
  `;

export const Content = styled.View`
  display: flex;
  height: 100%;
  flex-direction: column;
  border-radius: 20px;
  ${({ theme }) => css`
  background-color: ${theme.COLORS.WHITE};
  `};
  justify-content: flex-start;
  align-items: center
`;

export const FormView = styled.View`
  width: 85%;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: left;
`;