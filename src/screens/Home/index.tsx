import { Container } from './styles';

import { LogoHeader } from '../../components/LogoHeader';
import { StatsHeader } from '../../components/StatsHeader';
import { Button } from '../../components/Button';
import { SectionList } from '../../components/SectionList';

export function Home() {
  return (
    <Container>
      <LogoHeader />
      <StatsHeader />
      <Button />
      <SectionList />
      {/* <Text>Home</Text>
      <Text style={{ fontFamily: 'NunitoSans_400Regular' }}>Home</Text>
      <Text style={{ fontFamily: 'NunitoSans_700Bold' }}>Home</Text>
      <Text>Nunito-SAns?</Text>
      <Text style={{ fontFamily: 'NunitoSans_400Regular' }}>Nunito-SAns?</Text>
      <Text style={{ fontFamily: 'NunitoSans_700Bold' }}>Nunito-SAns?</Text>
      <Text style={{ fontFamily: 'NunitoSans_700Bold' }}>Funcionando??????</Text> */}
    </Container>
  );
}
