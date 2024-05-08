import { Container, Content, Text, BoldText, Image, Title } from './styles'

import { Button } from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

import PositiveFeed from '../../assets/Illustrationcontinueassim.png'
import NegativeFeed from '../../assets/Illustrationquepena.png'

interface FeedBackPageProps {
  route: {
    params?: {
      selection?: string;
    };
  };
}

export function FeedBackPage({ route }: FeedBackPageProps) {

  const selection = route.params?.selection;

  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Content>
        {selection === 'SIM' ? (
          <>
            <Title isPositive >Continue assim!</Title>
            <Text>Você continua <BoldText>dentro da dieta. </BoldText>Muito bem!</Text>
            <Image source={PositiveFeed} />
          </>
        ) : (
          <>
            <Title>Que pena!</Title>
            <Text>Você <BoldText>saiu da dieta</BoldText> desta vez, mas continue se esforçando e não desista!</Text>
            <Image source={NegativeFeed} />
          </>
        )}

        <Button width={'200px'} title={'Ir para página inicial'} onPress={handleNavigate} />
      </Content>
    </Container>
  )
}