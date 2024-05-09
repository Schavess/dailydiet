import { TouchableOpacity, Text } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
  width: string;
}

type PropsText = {
  type: ButtonTypeStyleProps;
  width: string;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: ${({ width }) => width};
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  border-radius: 6px;
  margin-top: 10px;
  padding: 5px;
  ${({ theme, type }) => css`
  border: 1px solid ${theme.COLORS.GRAY_2};
  `};
`;

export const Title = styled(Text)<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  padding-left: 5px;
`;