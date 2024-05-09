import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Homestats } from '../screens/HomeStats';
import { MealCreatorPage } from '../screens/MealCreatorPage';
import { MealEditorPage } from '../screens/MealEditorPage';
import { FeedBackPage } from '../screens/FeedBackPage';
import { MealPageInfo } from '../screens/MealPageInfo';

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
      <Screen
        name="mealeditor"
        component={MealEditorPage}
      />

      <Screen
        name="feedback"
        component={FeedBackPage}
      />

      <Screen
        name="mealinfo"
        component={MealPageInfo}
      />

    </Navigator>
  );
}