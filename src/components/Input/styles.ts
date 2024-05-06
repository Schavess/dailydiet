import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface TextInputProps {
  height?: string;
}

export const Container = styled(TextInput)<TextInputProps>`
  flex: 1;
  min-height: ${(props => props.height || '56px')};
  
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_2};
  background-color: ${theme.COLORS.WHITE};
  border: 2px ${theme.COLORS.GRAY_5};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
  `};
  border-radius: 6px;
  padding: 16px;
`;