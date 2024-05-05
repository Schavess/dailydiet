import { Container } from './styles';

import { LogoHeader } from '../../components/LogoHeader';
import { StatsHeader } from '../../components/StatsHeader';
import { Button } from '../../components/Button';
import { SectionList } from '../../components/SectionList';

import { useNavigation } from '@react-navigation/native'

type Item = {
  id: string;
  name: string;
  hour: string;
  inDiet: boolean;
}
type Section = {
  title: string;
  data: Item[];
}

export function Home() {

  const navigation = useNavigation();

  function handleStatsInfoNavigation() {
    navigation.navigate('homestats');
  }

  const sections: Section[] = [
    { title: '04.05.2024', data: [{ id: '1', hour: '08:00', name: 'X-Tudo', inDiet: false }, { id: '2', hour: '12:00', name: 'Lasanha', inDiet: false }] },
    { title: '03.05.2024', data: [{ id: '1', hour: '08:00', name: 'X-Tudo', inDiet: false }, { id: '2', hour: '12:00', name: 'Lasanha', inDiet: false }, { id: '3', hour: '18:00', name: 'Salada', inDiet: true }] },
  ];

  return (
    <Container>
      <LogoHeader />
      <StatsHeader statistic={'40,86%'} onPress={handleStatsInfoNavigation} />
      <Button />
      <SectionList sections={sections} />
    </Container>
  );
}
