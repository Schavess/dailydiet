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
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
  align-items: center;
  `;

export const FormView = styled.View`
  width: 90%;
  height: 80%;
  justify-content: space-between;
`;

export const FormDivideView = styled.View`
  display: flex;
  flex-direction: row;
  `;

export const HalfWidthContainer = styled.View`
  align-items: left;
  justify-content: space-between;
  width: 50%;
  `;

export const Text = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: left;
  padding-left: 5px;
`;