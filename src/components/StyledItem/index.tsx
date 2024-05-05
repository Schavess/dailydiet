import { Container, Content, HourText, HourDivisor, StatusTrue, StatusFalse, Text } from './styles';

type StyledItemProps = {
  hour: string;
  name: string;
  inDiet: boolean;
}

export function StyledItem({ hour, name, inDiet }: StyledItemProps) {
  return (
    <Container>
      <Content>
        <HourText>{hour}</HourText>
        <HourDivisor>|</HourDivisor>
        <Text>{name}</Text>
        {inDiet ? <StatusTrue /> : <StatusFalse />}
      </Content>
    </Container>
  );
}