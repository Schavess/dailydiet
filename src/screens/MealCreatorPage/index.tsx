import { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Content, FormView, FormDivideView, HalfWidthContainer, Text } from './styles';
import { DefaultHeader } from '../../components/DefaultHeader';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ToggleYesNoButton } from '../../components/ToogleYesNo';
import { DatePicker } from '../../components/DateTimePicker';

import { useNavigation } from '@react-navigation/native';

import { mealCreate } from '../../storage/meal/mealCreate'

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

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

  const handleSubmit = async () => {
    if (name !== '') {
      const formattedDate = format(selectedDate, 'dd/MM/yyyy', { locale: ptBR });
      const formattedTime = format(selectedTime, 'HH:mm', { locale: ptBR });
      const newMeal = {
        name: name,
        hour: formattedTime,
        date: formattedDate,
        description: description,
        inDiet: selection === 'SIM',
      };

      await mealCreate(newMeal);

      navigation.navigate('feedback', { selection });
    } else {
      Alert.alert('Qual a refeição?');
    }
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
      <DefaultHeader title={'Nova refeição'} onPress={handleBackNavigation} />
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
              height={'150px'}
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

            <Text>Está dentro da dieta?</Text>
            <ToggleYesNoButton onSelectionChange={handleSelection} />
            <Button title={'Cadastrar refeição'} onPress={handleSubmit} />
          </FormView>

        </Content>
      </Container>
    </>
  )
}