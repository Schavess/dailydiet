import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Homestats } from '../screens/HomeStats';
import { MealCreatorPage } from '../screens/MealCreatorPage';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="homestats"
        component={Homestats}
      />

      <Screen
        name="mealcreator"
        component={MealCreatorPage}
      />

    </Navigator>
  );
}