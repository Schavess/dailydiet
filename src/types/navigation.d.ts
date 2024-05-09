export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      homestats: undefined;
      mealcreator: undefined;
      mealeditor: undefined;
      feedback: {
        selection: 'SIM' | 'NÃO';
      };
      mealinfo: {
        hour: string;
        name: string;
        date: string;
        description: string;
        inDiet: boolean;
      }
    }
  }
}