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
`;

export const View = styled.View`
  width: 90%;
  padding-top: 40px;
  /* align-items: center; */
  /* justify-content: center; */
  /* background-color:  #fcd; */
`;


export const Title = styled.Text`
${({ theme }) => css`
font-size: ${theme.FONT_SIZE.XL}px;
font-family: ${theme.FONT_FAMILY.BOLD};
`};
text-align: left;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  text-align: justify;
  padding-top: 10px;
  padding-bottom: 10px;

`;