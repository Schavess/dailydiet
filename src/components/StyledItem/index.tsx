import { Container, Content, HourText, HourDivisor, StatusTrue, StatusFalse, Text } from './styles';

type StyledItemProps = {
  hour: string;
  name: string;
  inDiet: boolean;
}

import { useNavigation } from '@react-navigation/native';

export function StyledItem({ hour, name, inDiet, ...rest }: StyledItemProps) {

  const navigation = useNavigation();

  function handleClickItem() {
    console.log(hour);
    console.log(name);
    console.log(inDiet);
    navigation.navigate('mealinfo', {
      hour,
      name,
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