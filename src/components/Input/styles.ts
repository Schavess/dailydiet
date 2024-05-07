import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface TextInputProps {
  width?: string;
  height?: string;
}

export const Container = styled.View`
  flex-direction: column;
  height: auto;
  padding: 5px;
  justify-content: space-between;
  `;

export const Content = styled(TextInput)<TextInputProps>`
  flex: 1;
  flex-direction: column;
  min-height: ${(props => props.height)};
  min-width: ${(props => props.width || '50%')};
  max-width: ${(props => props.width || '100%')};
  
  ${({ theme }) => css`
  color: ${theme.COLORS.GRAY_2};
  background-color: ${theme.COLORS.WHITE};
  border: 2px ${theme.COLORS.GRAY_5};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
  `};
  justify-content: space-between;
  border-radius: 6px;
  margin-bottom: ${(props => props.height)};
  padding-left: 5px;
`;

export const Text = styled.Text`
  padding: 4px;
`;
