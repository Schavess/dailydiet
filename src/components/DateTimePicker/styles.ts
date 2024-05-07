import styled, { css } from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  `;

export const DateTimeButton = styled(TouchableOpacity)`
  width: 95%;
  height: 56px;
  justify-content: center;
  border: 1px solid #bbb;
  border-radius: 5px;
  margin: 5px;
`;

export const ButtonText = styled(Text)`
  color: black;
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  text-align: left;
  padding-left: 5px;
`;
