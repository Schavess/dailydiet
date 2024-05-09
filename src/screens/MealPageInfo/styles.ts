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
  height: 40%;
  padding-top: 40px;
  align-items: flex-start;
  justify-content: space-between;
  `;
export const ButtonView = styled.View`
  width: 90%;
  height: 60%;
  padding-top: 50%;
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
export const BoldText = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: justify;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const InDietView = styled.View`
  width: 140px;
  border-radius: 20px;
  padding: 5px;
  align-items: center;
  height: 34px;
  flex-direction: row;
  ${({ theme }) => css`
  background-color: ${theme.COLORS.GRAY_6};
  `};
`;

export const InDietText = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  padding-left: 10px;
`;

export const StatusTrue = styled.View`
  ${({ theme }) => css`
  border-radius: 10px;
  width: 10px;
  height: 10px;
  
  `};
  display: flex;
  background-color: ${({theme}) => theme.COLORS.GREEN_DARK};
`;
export const StatusFalse = styled.View`
  ${({ theme }) => css`
    border-radius: 10px;
    width: 10px;
    height: 10px;

  `};
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
`;