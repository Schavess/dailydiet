import { useState } from 'react';

import { Container, Content, FormView, FormDivideView, HalfWidthContainer, Text } from './styles';

import { DefaultHeader } from '../../components/DefaultHeader';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ToggleYesNoButton } from '../../components/ToogleYesNo';
import { DatePicker } from '../../components/DateTimePicker';

import { useNavigation } from '@react-navigation/native'

export function MealCreatorPage() {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selection, setSelection] = useState<'SIM' | 'NÃO'>('SIM');

  function handleBackNavigation() {
    navigation.navigate('home');
  }

  function handleSubmit() {
    console.log(name);
    console.log(description);
    console.log(selection);
    console.log(selectedTime);
    console.log(selectedDate);
  }

  const handleSelection = (selection: 'SIM' | 'NÃO') => {
    setSelection(selection);
  };


  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };

  const handleTimeChange = (newTime: Date) => {
    setSelectedTime(newTime);
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
                <Text>Data</Text>
                <DatePicker value={selectedDate} mode="date" onDateChange={handleDateChange} />
              </HalfWidthContainer>
              <HalfWidthContainer>
                <Text>Hora</Text>
                <DatePicker value={selectedTime} mode="time" onDateChange={handleTimeChange} />
              </HalfWidthContainer>
            </FormDivideView>

            <FormView>
              <Text>Está dentro da dieta?</Text>
            </FormView>
            <ToggleYesNoButton onSelectionChange={handleSelection} />

            <Button title={'Cadastrar refeição'} onPress={handleSubmit} />
          </FormView>

        </Content>
      </Container>
    </>
  )
}