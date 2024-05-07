import { useState } from 'react';

import { Container, Content, FormView, FormDivideView, HalfWidthContainer } from './styles';

import { DefaultHeader } from '../../components/DefaultHeader';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ToggleYesNoButton } from '../../components/ToogleYesNo';

import { useNavigation } from '@react-navigation/native'

export function MealCreatorPage() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState('');
  const [time, setTime] = useState('');

  const [selection, setSelection] = useState<'SIM' | 'NÃO' | null>(null);

  const navigation = useNavigation();

  function handleBackNavigation() {
    navigation.navigate('home');
  }

  function handleSubmit() {
    console.log(name);
    console.log(description);
    console.log(selection);
    console.log(time);
    console.log(data);
  }

  const handleSelection = (selection: 'SIM' | 'NÃO') => {
    setSelection(selection);
    console.log('Opção selecionada:', selection);
  };

  return (
    <>
      <DefaultHeader onPress={handleBackNavigation} />
      <Container>
        <Content>
          <FormView>
            <Input
              title='Nome'
              placeholder="Nova refeição"
              onChangeText={setName}
              height={'56px'}
            />
            <Input
              title='Descrição'
              placeholder="Descreva o alimento"
              onChangeText={setDescription}
              height={'120px'}
            />
            <FormDivideView>
              <HalfWidthContainer>
                <Input
                  title='Data'
                  placeholder="Data"
                  onChangeText={setData}
                  keyboardType='numeric'
                />
              </HalfWidthContainer>
              <HalfWidthContainer>
                <Input
                  title='Hora'
                  placeholder="Hora"
                  onChangeText={setTime}
                  keyboardType='numeric'
                />
              </HalfWidthContainer>
            </FormDivideView>


            <ToggleYesNoButton onSelectionChange={handleSelection} />

            <Button title={'Cadastrar refeição'} onPress={handleSubmit} />
          </FormView>

        </Content>
      </Container>
    </>
  )
}