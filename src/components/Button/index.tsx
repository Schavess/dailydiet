import { ReactNode } from 'react';
import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  width?: string;
  type?: ButtonTypeStyleProps;
  icon?: ReactNode;
}

export function Button({ title, type = 'PRIMARY', width = 'auto', icon, ...rest }: Props) {
  return (
    <Container type={type} width={width} {...rest}>
      {icon && <>{icon}</>}
      <Title type={type} width={width}>{title}</Title>
    </Container>
  )
}