import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, Content, Text } from "./styles";


type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  title?: string;
  width?: string;
  height?: string;
}

export function Input({ inputRef, title = 'Title', width, height = '56px', ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Text>{title}</Text>
      <Content
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_3}
        {...rest}
        height={height}
        width={width}
      />

    </Container>
  )
}