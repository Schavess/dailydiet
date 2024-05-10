import { Container, Content, Text, StatsCard, Number, CardText, DoubleStatsView, DoubleStatsCard } from './styles';

import { StatsHeaderInfo } from '../../components/StatsHeaderInfo';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import { useTheme } from "styled-components/native";
import { useEffect, useState } from 'react';
import { mealGetAll } from 'src/storage/meal/mealGetAll';

type Item = {
  id: string;
  name: string;
  hour: string;
  date: string;
  description: string;
  inDiet: boolean;
}
type Section = {
  title: string;
  data: Item[];
}

export function Homestats() {

  const { COLORS } = useTheme();
  const navigation = useNavigation();

  const [mealList, setMealList] = useState<Section[]>([]);
  const [result, setResult] = useState('0.00');
  const [totalMeals, setTotalMeals] = useState('0');
  const [mealsInDiet, setMealsInDiet] = useState('0');
  const [mealsOutDiet, setMealsOutDiet] = useState('0');
  const [bestSequence, setBestSequence] = useState('0');

  function handleBackNavigation() {
    navigation.navigate('home');
  }

  async function fetchMeals() {
    try {
      const data = await mealGetAll();
      setMealList(data);
    } catch (error) {
      console.log(error);
    }
  }

  const mealsInDietPercentage = () => {
    const allItems = mealList.flatMap(section => section.data);
    const inDietItems = allItems.filter(item => item.inDiet);
    const totalItems = allItems.length;
    if (totalItems === 0) return '0.00';
    const result = ((inDietItems.length / totalItems) * 100).toFixed(2).toString();
    return result;
  }

  const countTotalMeals = () => {
    const allItems = mealList.flatMap(section => section.data);
    const totalItems = allItems.length.toString();
    return totalItems;
  }

  const countMealsInDiet = () => {
    const allItems = mealList.flatMap(section => section.data);
    const inDietItems = allItems.filter(item => item.inDiet);
    const totalItems = inDietItems.length.toString();

    return totalItems;
  }

  const countMealsOutDiet = () => {
    const allItems = mealList.flatMap(section => section.data);
    const outDietItems = allItems.filter(item => !item.inDiet);
    const totalItems = outDietItems.length.toString();

    return totalItems;
  }

  const bestSequenceOfMealsInDiet = () => {
    const allItems = mealList.flatMap(section => section.data);
    allItems.sort((a, b) => {
      // Combina data e hora em um único objeto Date e converte em timestamp
      const dateTimeA = new Date(`${a.date}T${a.hour}`).getTime();
      const dateTimeB = new Date(`${b.date}T${b.hour}`).getTime();
      return dateTimeA - dateTimeB;
    });

    let maxInDietSequence = 0;
    let currentInDietSequence = 0;

    allItems.forEach(item => {
      if (item.inDiet) {
        currentInDietSequence++;
        maxInDietSequence = Math.max(maxInDietSequence, currentInDietSequence);
      } else {
        currentInDietSequence = 0;  // Reset the sequence counter if the meal is out of diet
      }
    });

    return maxInDietSequence.toString();  // Converting to string to match existing code style
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(() => {
    const percentage = mealsInDietPercentage();
    setResult(percentage);
    const mealsInDiet = countMealsInDiet();
    setMealsInDiet(mealsInDiet);
    const mealsOutDiet = countMealsOutDiet();
    setMealsOutDiet(mealsOutDiet);
    const total = countTotalMeals();
    setTotalMeals(total);
    const bestSequence = bestSequenceOfMealsInDiet();
    setBestSequence(bestSequence);

  }, [mealList]);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.GREEN_LIGHT}
      />
      <Container>
        <StatsHeaderInfo statistic={result} onPress={handleBackNavigation} />
        <Content>
          <Text>Estatísticas gerais</Text>
          <StatsCard>
            <Number>{bestSequence}</Number>
            <CardText>melhor sequência de pratos dentro da dieta</CardText>
          </StatsCard>
          <StatsCard>
            <Number>{totalMeals}</Number>
            <CardText>refeições registradas</CardText>
          </StatsCard>
          <DoubleStatsView>
            <DoubleStatsCard backgroundColor={COLORS.GREEN_LIGHT}>
              <Number>{mealsInDiet}</Number>
              <CardText>refeições dentro da dieta</CardText>
            </DoubleStatsCard>
            <DoubleStatsCard backgroundColor={COLORS.RED_LIGHT}>
              <Number>{mealsOutDiet}</Number>
              <CardText>refeições fora da dieta</CardText>
            </DoubleStatsCard>
          </DoubleStatsView>
        </Content>
      </Container >
    </>
  )
}