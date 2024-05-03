import { Container, Content, StatText, SubStatText, ForwardIcon } from './styles';

export function StatsHeader() {
  return (
    <Container>
      <Content>
        <ForwardIcon />
        <StatText>90,86%</StatText>
        <SubStatText>das refeições dentro da dieta</SubStatText>
      </Content>
    </Container>
  )
}