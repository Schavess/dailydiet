import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => css`
  background-color: ${theme.COLORS.GRAY_5};
  `};
`;

export const Content = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border-radius: 20px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
  `};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
${({ theme }) => css`
font-size: ${theme.FONT_SIZE.MD}px;
font-family: ${theme.FONT_FAMILY.REGULAR};
`};
text-align: center;
padding-top: 10px;
padding-bottom: 10px;
`;