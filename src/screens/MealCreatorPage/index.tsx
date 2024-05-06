import { Container, Content, FormView, Text } from './styles';

import { DefaultHeader } from '../../components/DefaultHeader';
import { Input } from '../../components/Input';

export function MealCreatorPage() {
  return (
    <>
      <DefaultHeader />
      <Container>
        <Content>
          <FormView>
            <Text>Nome</Text>
            <Input
              placeholder="Nova refeição"
              onChangeText={() => { }}
            />
            <Text>Descrição</Text>
            <Input
              placeholder="Descreva o alimento"
              onChangeText={() => { }}
              height={'300px'}
            />

          </FormView>
        </Content>
      </Container>
    </>
  )
}