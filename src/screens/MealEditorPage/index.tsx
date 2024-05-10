import { useEffect, useState } from 'react';

import { Alert } from 'react-native';

import { Container, Content, FormView, FormDivideView, HalfWidthContainer, Text } from './styles';

import { DefaultHeader } from '../../components/DefaultHeader';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ToggleYesNoButton } from '../../components/ToogleYesNo';
import { DatePicker } from '../../components/DateTimePicker';

import { useNavigation } from '@react-navigation/native';

import { mealGetOneById } from '../../storage/meal/mealGetOne'

import { parse, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { mealUpdateById } from '../../storage/meal/mealUpdate';


type MealItem = {
  id: string;
  name: string;
  hour: string;
  date: string;
  description: string;
  inDiet: boolean;
}
export function MealEditorPage({ route }: any) {

  const navigation = useNavigation();

  const { id, inDiet } = route.params

  const [meal, setMeal] = useState<MealItem | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selection, setSelection] = useState<'SIM' | 'NÃO'>(inDiet ? 'SIM' : 'NÃO');

  function handleBackNavigation() {
    navigation.goBack();
  }

  const parseDateString = (dateStr: string, timeStr: string) => {
    const dateParts = dateStr.split('/').reverse(); // Converte 'dd/MM/yyyy' para ['yyyy', 'MM', 'dd']
    const timeParts = timeStr.split(':'); // Converte 'HH:mm' para ['HH', 'mm']

    // Cria a data no formato 'yyyy-MM-dd HH:mm'
    const dateTimeStr = `${dateParts.join('-')}T${timeParts.join(':')}`;

    return parse(dateTimeStr, 'yyyy-MM-dd\'T\'HH:mm', new Date(), { locale: ptBR });
  };

  const formatDate = (date: Date) => {
    return format(date, 'yyyy-MM-dd');
  };

  const formatTime = (time: Date) => {
    return format(time, 'HH:mm');
  };


  async function handleSubmit() {
    if (name !== '') {
      const updatedMealData = {
        id,  // O mesmo ID que deseja atualizar
        name,
        hour: formatTime(selectedTime),
        date: formatDate(selectedDate),
        description,
        inDiet: selection === 'SIM',
      };

      await mealUpdateById(id, updatedMealData);

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

  useEffect(() => {
    async function fetchMeal() {
      try {
        const fetchedMeal = await mealGetOneById(id);
        const mealDate = parseDateString(fetchedMeal.date, fetchedMeal.hour);
        setMeal(fetchedMeal);
        setName(fetchedMeal.name);
        setDescription(fetchedMeal.description);
        setSelectedDate(mealDate);
        setSelectedTime(mealDate);
        setSelection(fetchedMeal.inDiet ? 'SIM' : 'NÃO');
      } catch (error) {
        Alert.alert('Erro ao buscar a refeição');
      }
    }

    fetchMeal();
  }, [id]);

  return (
    <>
      <DefaultHeader title={'Nova refeição'} onPress={handleBackNavigation} />
      <Container>
        <Content>
          <FormView>
            <Input
              title='Nome'
              placeholder="Nova refeição"
              value={name}
              onChangeText={setName}
              height={'56px'}
            />
            <Input
              title='Descrição'
              placeholder="Descreva o alimento"
              value={description}
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
            <ToggleYesNoButton inDiet={inDiet} onSelectionChange={handleSelection} />
            <Button title={'Salvar Alterações'} onPress={handleSubmit} />
          </FormView>

        </Content>
      </Container>
    </>
  )
}