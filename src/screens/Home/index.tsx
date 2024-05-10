import { Container } from './styles';

import { LogoHeader } from '../../components/LogoHeader';
import { StatsHeader } from '../../components/StatsHeader';
import { ButtonCreator } from '../../components/ButtonCreator';
import { SectionList } from '../../components/SectionList';

import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { mealGetAll } from 'src/storage/meal/mealGetAll';

import { useIsFocused } from '@react-navigation/native';

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

export function Home() {

  const [mealList, setMealList] = useState<Section[]>([]);
  const [result, setResult] = useState('0.00');
  const navigation = useNavigation();
  const isFocused = useIsFocused();


  function handleStatsInfoNavigation() {
    navigation.navigate('homestats');
  }

  function handleMealCreatorNavigation() {
    navigation.navigate('mealcreator');
  }


  async function fetchMeals() {
    try {
      const data = await mealGetAll();
      setMealList(data);
      mealsInDietPercentage();
    } catch (error) {
      console.log(error);
    }
  }

  const mealsInDietPercentage = () => {
    const allItems = mealList.flatMap(section => section.data);
    const inDietItems = allItems.filter(item => item.inDiet);
    const totalItems = allItems.length;
    if (totalItems === 0) return '0.0';
    const result = ((inDietItems.length / totalItems) * 100).toFixed(2).toString();
    return result;
  }


  useEffect(() => {
    fetchMeals();
  }, []);


  useEffect(() => {
    const percentage = mealsInDietPercentage();
    setResult(percentage);
  }, [mealList]);

  useEffect(() => {
    if (isFocused) {
      fetchMeals();
    }
  }, [isFocused]);
  // const sections: Section[] = [
  //   {
  //     title: '04/05/2024',
  //     data: [
  //       { id: '1', hour: '08:00', name: 'X-Tudo', inDiet: false, date: '04/05/2024', description: 'Hambúrguer completo com extras' },
  //       { id: '2', hour: '12:00', name: 'Lasanha', inDiet: false, date: '04/05/2024', description: 'Lasanha à bolonhesa com queijo' }
  //     ]
  //   },
  //   {
  //     title: '03/05/2024',
  //     data: [
  //       { id: '1', hour: '08:00', name: 'X-Tudo', inDiet: false, date: '03/05/2024', description: 'Hambúrguer completo com extras' },
  //       { id: '2', hour: '12:00', name: 'Lasanha', inDiet: false, date: '03/05/2024', description: 'Lasanha à bolonhesa com queijo' },
  //       { id: '3', hour: '18:00', name: 'Salada', inDiet: true, date: '03/05/2024', description: 'Salada verde com molho especial' }
  //     ]
  //   }
  // ]

  return (

    <Container>
      <LogoHeader />
      <StatsHeader statistic={result} onPress={handleStatsInfoNavigation} />
      <ButtonCreator onPress={handleMealCreatorNavigation} />
      <SectionList sections={mealList} />
    </Container>
  );
}
