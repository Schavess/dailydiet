import { Container, Content, HourText, HourDivisor, StatusTrue, StatusFalse, Text } from './styles';

type StyledItemProps = {
  id: string;
  hour: string;
  name: string;
  date: string;
  description: string;
  inDiet: boolean;
}

import { useNavigation } from '@react-navigation/native';

export function StyledItem({ id, hour, date, description, name, inDiet, ...rest }: StyledItemProps) {

  const navigation = useNavigation();

  function handleClickItem() {
    navigation.navigate('mealinfo', {
      id,
      hour,
      name,
      date,
      description,
      inDiet,
    });
  }

  return (
    <Container {...rest} onPress={handleClickItem}>
      <Content>
        <HourText>{hour}</HourText>
        <HourDivisor>|</HourDivisor>
        <Text>{name}</Text>
        {inDiet ? <StatusTrue /> : <StatusFalse />}
      </Content>
    </Container>
  );
}