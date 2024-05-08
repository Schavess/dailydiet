import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
  width: string;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.RED_DARK};
  border-radius: 6px;
  margin-top: 10px;
  padding: 5px;
`;

export const Title = styled.Text<any>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;