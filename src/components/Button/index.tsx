import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  width?: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', width = 'auto', ...rest }: Props) {
  return (
    <Container type={type} width={width} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}