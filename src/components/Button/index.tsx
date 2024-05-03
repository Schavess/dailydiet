import { Container, Text, Content, ButtonText, PlusIcon } from './styles';

export function Button() {
  return (
    <Container>
      <Text>Refeições</Text>
      <Content>
        <PlusIcon />
        <ButtonText>Nova refeição</ButtonText>
      </Content>
    </Container>
  )
}