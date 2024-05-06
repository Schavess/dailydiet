import { TouchableOpacityProps } from "react-native";
import { Container, Content, StatText, SubStatText, ForwardIcon } from './styles';

// import { StatusBar } from 'react-native';

type Props = TouchableOpacityProps & {
  statistic: string;
}

export function StatsHeaderInfo({ statistic, ...rest }: Props) {

  const value = parseFloat(statistic.replace(',', '.')); // Converte a string para número
  const isOnDiet = value > 50 ? true : false;

  return (
    <>
      {/* <StatusBar
        barStyle="dark-content"
        backgroundColor="#F4E6E7"
        translucent={false}
      /> */}
      <Container {...rest} isOnDiet={isOnDiet} >
        <Content isOnDiet={isOnDiet}>
          <ForwardIcon isOnDiet={isOnDiet} />
          <StatText >{value}%</StatText>
          <SubStatText>das refeições dentro da dieta</SubStatText>
        </Content>
      </Container>
    </>
  )
}