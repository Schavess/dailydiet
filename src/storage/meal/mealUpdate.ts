import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { mealGetAll } from "./mealGetAll";

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

export async function mealUpdateById(mealId: string, updatedMeal: MealItem) {
  try {
    const storedMeals = await mealGetAll();

    // Atualiza o item especificado em cada seção, mantendo o mesmo formato de seções.
    const updatedSections = storedMeals.map(section => {
      const updatedData = section.data.map(meal => {
        if (meal.id === mealId) {
          return { ...meal, ...updatedMeal }; // Substitui os dados antigos pelos novos fornecidos
        }
        return meal;
      });
      return { ...section, data: updatedData };
    });

    // Atualiza o AsyncStorage com o novo array de seções.
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedSections));
  } catch (error) {
    console.error("Failed to update the meal", error);
    throw error;
  }
}
