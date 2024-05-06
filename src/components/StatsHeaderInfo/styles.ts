import styled, { css } from 'styled-components/native';
import { ArrowLeft } from "phosphor-react-native";


import { TouchableOpacityProps, TouchableOpacity } from "react-native";

interface ContentProps {
  isOnDiet: boolean;
}

// Extenda apenas as propriedades de TouchableOpacity aqui.
interface ContainerProps extends TouchableOpacityProps {
  isOnDiet: boolean;
}

export const Container = styled(TouchableOpacity).attrs<ContainerProps>((props) => ({
  activeOpacity: 0.7, // Você pode definir atributos padrão aqui
}))<ContainerProps>`
  display: flex;
  height: 150px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background-color: ${({ theme, isOnDiet }) => isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

// export const Container = styled.TouchableOpacity<ContentProps & ViewProps>`
//   display: flex;
//   height: 150px;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   padding: 0;
//   margin: 0;
//   background-color: ${({ theme, isOnDiet }) => isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
//   `;

export const Content = styled.View<ContentProps>`
  display: flex;
  flex: 1;
  width: 100%;
  /* height: 120px; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme, isOnDiet }) => isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const StatText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`
export const SubStatText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.GRAY_3};
  `};
  border-radius: 5px;
  margin-bottom: 20px;
`

export const ForwardIcon = styled(ArrowLeft).attrs<ContentProps>(({ theme, isOnDiet }) => ({
  size: 36,
  color: isOnDiet ?  theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK,    
}))`
  margin-right: auto;
`;

