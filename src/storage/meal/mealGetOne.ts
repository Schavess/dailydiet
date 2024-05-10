import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";

type MealItem = {
  id: string;
  name: string;
  hour: string;
  date: string;
  description: string;
  inDiet: boolean;
};

type MealSection = {
  title: string;
  data: MealItem[];
};

export async function mealGetOneById(mealId: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: MealSection[] = storage ? JSON.parse(storage) : [];

    for (const section of meals) {
      const foundMeal = section.data.find(meal => meal.id === mealId);
      if (foundMeal) {
        return foundMeal;
      }
    }

    throw new Error('Refeição não encontrada');
  } catch (error) {
    throw error;
  }
}
