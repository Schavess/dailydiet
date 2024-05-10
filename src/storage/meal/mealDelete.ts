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
export async function mealRemoveById(mealId: string) {
  try {
    const storedMeals = await mealGetAll();

    // Cria um novo array de seções onde cada seção contém os itens filtrados.
    const updatedSections = storedMeals.map(section => {
      const filteredData = section.data.filter(meal => meal.id !== mealId);
      return { ...section, data: filteredData };
    }).filter(section => section.data.length > 0); // Remove seções vazias, se necessário.

    // Atualiza o AsyncStorage com o novo array de seções.
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedSections));
  } catch (error) {
    console.error("Failed to remove the task", error);
    // Aqui você poderia lançar um erro personalizado ou outro tratamento conforme necessário.
    throw error;
  }
}
