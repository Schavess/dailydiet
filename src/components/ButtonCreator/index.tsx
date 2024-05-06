import { Container, Text, Content, ButtonText, PlusIcon } from './styles';
import { TouchableOpacityProps } from "react-native";


export function ButtonCreator({ onPress, ...rest }: TouchableOpacityProps) {
  return (
    <Container  >
      <Text>Refeições</Text>
      <Content onPress={onPress} {...rest}>
        <PlusIcon />
        <ButtonText>Nova refeição</ButtonText>
      </Content>
    </Container>
  )
}