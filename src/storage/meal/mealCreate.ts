import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
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

export async function mealCreate(newMeal: Omit<MealItem, 'id'>) {
  try {
    const storedSections = await mealGetAll(); // Busca as seções existentes.

    // Determina o próximo ID com base no maior ID existente.
    const nextId = storedSections
      .flatMap(section => section.data)
      .reduce((maxId, item) => Math.max(parseInt(item.id, 10), maxId), 0) + 1;

    const fullMeal: MealItem = { ...newMeal, id: nextId.toString() }; // Atualiza o id do novo MealItem.

    // Verifica se já existe uma seção para a data.
    const existingSection = storedSections.find(section => section.title === newMeal.date);

    if (existingSection) {
      // Adiciona o novo item à seção existente.
      existingSection.data.push(fullMeal);
    } else {
      // Cria uma nova seção com o novo item.
      storedSections.push({
        title: newMeal.date,
        data: [fullMeal],
      });
    }

    const updatedStorage = JSON.stringify(storedSections);
    await AsyncStorage.setItem(MEAL_COLLECTION, updatedStorage);
  } catch (error) {
    console.error("Failed to create a new meal", error);
    throw new Error("Falha ao criar uma nova refeição.");
  }
}
